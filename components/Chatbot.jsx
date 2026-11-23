"use client";

import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Bot,
  User,
  Loader2,
} from "lucide-react";

// Clean ** markdown and make URLs clickable
const formatMessageContent = (text, isUser) => {
  if (!text) return "";

  const cleanedText = text.replace(/\*\*/g, "");
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = cleanedText.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      const cleanUrl = part.replace(/[.,!?)]+$/, "");
      const trailingPunctuation = part.slice(cleanUrl.length);

      return (
        <span key={index}>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline font-medium break-all transition ${
              isUser
                ? "text-black hover:text-neutral-800"
                : "text-[#F5C542] hover:text-yellow-300"
            }`}
          >
            {cleanUrl}
          </a>
          {trailingPunctuation}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const [sessionId] = useState(() => {
    if (typeof window !== "undefined") {
      let id = localStorage.getItem("chat-session-id");

      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("chat-session-id", id);
      }

      return id;
    }

    return "";
  });

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! Welcome to Trading Sides. How can I help you today?",
    },
  ]);

  // Open chatbot from Navbar Live Chat button
  useEffect(() => {
    const openChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-chatbot", openChatbot);

    return () => {
      window.removeEventListener("open-chatbot", openChatbot);
    };
  }, []);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Send message
  const handleSend = async (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong"
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed right-4 top-[85px] z-[9999] w-[360px] max-w-[calc(100vw-32px)] sm:right-6 sm:top-[95px]">

          <div className="flex h-[510px] max-h-[calc(100dvh-115px)] flex-col overflow-hidden rounded-2xl border border-yellow-500/30 bg-[#0d0d0f] shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-xl">

            {/* HEADER */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#141417] px-5 py-4 text-white">

              <div className="flex min-w-0 items-center gap-3">

                <div className="shrink-0 rounded-full bg-[#F5C542] p-2 text-black shadow-md shadow-yellow-500/20">
                  <Bot size={20} />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-[#F5C542]">
                Trading Sides Assistant
                  </h3>

                  <p className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                    <span className="truncate">Online · Ready to help</span>
                  </p>
                </div>

              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="shrink-0 rounded-lg p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

            </div>

            {/* MESSAGES */}
            <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto overflow-x-hidden bg-[#0a0a0c] p-4 scrollbar-thin scrollbar-thumb-white/10">

              {messages.map((msg, index) => {
                const isUser = msg.role === "user";

                return (
                  <div
                    key={index}
                    className={`flex min-w-0 items-start gap-2.5 ${
                      isUser ? "flex-row-reverse" : ""
                    }`}
                  >

                    <div
                      className={`mt-0.5 shrink-0 rounded-full p-2 ${
                        isUser
                          ? "bg-[#F5C542] text-black"
                          : "border border-white/10 bg-[#18181c] text-[#F5C542]"
                      }`}
                    >
                      {isUser ? (
                        <User size={15} />
                      ) : (
                        <Bot size={15} />
                      )}
                    </div>

                    <div
                      className={`min-w-0 max-w-[82%] whitespace-pre-wrap break-words [overflow-wrap:anywhere] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        isUser
                          ? "rounded-tr-none bg-[#F5C542] font-medium text-black shadow-md shadow-yellow-500/10"
                          : "rounded-tl-none border border-white/10 bg-[#16161a] text-gray-200 shadow-sm"
                      }`}
                    >
                      {formatMessageContent(msg.content, isUser)}
                    </div>

                  </div>
                );
              })}

              {loading && (
                <div className="flex items-center gap-2 px-1 text-yellow-400/80">
                  <Loader2 size={18} className="animate-spin" />
                  <span className="text-sm">
                    AI is thinking...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* INPUT */}
            <form
              onSubmit={handleSend}
              className="flex shrink-0 items-center gap-2 border-t border-white/10 bg-[#141417] p-3"
            >

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about trading, signals, giveaways..."
                disabled={loading}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0a0a0c] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/60"
              />

              <button
                type="submit"
                disabled={!message.trim() || loading}
                aria-label="Send message"
                className="shrink-0 rounded-xl bg-[#F5C542] p-3 text-black transition hover:bg-[#eab308] disabled:opacity-40"
              >
                <Send size={18} />
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}