"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
} from "lucide-react";

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
      content: "Hi! 👋 Welcome to Trading Sides! How can I help you today?",
    },
  ]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessage("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
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
        throw new Error(data.error || "Something went wrong");
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
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-yellow-500/30 bg-[#0d0d0f] shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#141417] px-5 py-4 text-white">

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#F5C542] p-2 text-black shadow-md shadow-yellow-500/20">
                <Bot size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#F5C542]">Trading Sides AI</h3>
                <p className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online · Ready to help
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-[#0a0a0c] p-4 scrollbar-thin scrollbar-thumb-white/10">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${
                  msg.role === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >

                <div className={`mt-0.5 rounded-full p-2 ${
                  msg.role === "user"
                    ? "bg-[#F5C542] text-black"
                    : "border border-white/10 bg-[#18181c] text-[#F5C542]"
                }`}>
                  {msg.role === "user" ? (
                    <User size={15} />
                  ) : (
                    <Bot size={15} />
                  )}
                </div>

                <div className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                  msg.role === "user"
                    ? "rounded-tr-none bg-[#F5C542] font-medium text-black shadow-md shadow-yellow-500/10"
                    : "rounded-tl-none border border-white/10 bg-[#16161a] text-gray-200 shadow-sm"
                }`}>
                  {msg.content}
                </div>

              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-yellow-400/80">
                <Loader2 size={18} className="animate-spin" />
                <span className="text-sm">AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-white/10 bg-[#141417] p-3"
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
              className="rounded-xl bg-[#F5C542] p-3 text-black transition hover:bg-[#eab308] disabled:opacity-40"
            >
              <Send size={18} />
            </button>

          </form>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C542] text-black shadow-[0_0_25px_rgba(245,197,66,0.4)] transition hover:scale-105 hover:bg-[#eab308]"
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
      </button>

    </div>
  );
}