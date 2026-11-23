import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import connectDB from "@/lib/db";
import Chat from "@/models/Chat";
import { TRADING_SIDES_KNOWLEDGE } from "@/lib/tradingSidesKnowledge";

export const runtime = "nodejs";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ==========================================
// CHAT API
// ==========================================

export async function POST(request) {
  try {
    const { sessionId, message } = await request.json();

    // Validate session ID
    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Validate message
    if (
      !message ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 }
      );
    }

    // Connect MongoDB
    await connectDB();

    // Find or create chat
    let chat = await Chat.findOne({ sessionId });

    if (!chat) {
      chat = new Chat({
        sessionId,
        messages: [],
      });
    }

    // Get previous conversation history
    const history = chat.messages
      .slice(-20)
      .map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [
          {
            text: msg.content,
          },
        ],
      }));

    // Generate Gemini response
    let response;
    let attempts = 0;

    while (attempts < 3) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",

          contents: [
            ...history,
            {
              role: "user",
              parts: [
                {
                  text: message.trim(),
                },
              ],
            },
          ],

          config: {
            systemInstruction: TRADING_SIDES_KNOWLEDGE,
            maxOutputTokens: 700,
          },
        });

        break;

      } catch (error) {
        attempts++;

        const status = error.status || error.code;

        console.error(
          "Gemini attempt " + attempts + " failed:",
          error.message
        );

        // Retry temporary server errors
        if (status !== 503 || attempts >= 3) {
          throw error;
        }

        await new Promise((resolve) => {
          setTimeout(resolve, attempts * 3000);
        });
      }
    }

    // Get AI response text and remove any stray ** markdown
    const rawReply = response?.text;

    if (!rawReply) {
      throw new Error("Gemini returned an empty response");
    }

    const aiReply = rawReply.replace(/\*\*/g, "").trim();

    // Save conversation in MongoDB
    chat.messages.push(
      {
        role: "user",
        content: message.trim(),
      },
      {
        role: "assistant",
        content: aiReply,
      }
    );

    await chat.save();

    // Return response
    return NextResponse.json({
      success: true,
      reply: aiReply,
      sessionId,
    });

  } catch (error) {
    console.error("Chat API Error:", error);

    const status = Number(error.status || error.code);

    let errorMessage =
      "Unable to process your message. Please try again.";

    if (status === 503) {
      errorMessage =
        "AI is temporarily busy. Please try again in a moment.";
    }

    if (status === 429) {
      errorMessage =
        "AI usage limit reached. Please try again later.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      {
        status:
          status === 503 || status === 429
            ? status
            : 500,
      }
    );
  }
}