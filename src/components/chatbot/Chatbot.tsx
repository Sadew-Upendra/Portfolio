"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Sparkles, Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { CHATBOT_QA, chatbotFallback } from "@/data/chatbotQA";

interface Message {
  role: "bot" | "user";
  text: string;
  animate?: boolean;
}

/**
 * Matching logic for now: quick-question chips answer instantly by exact
 * match; free-typed text matches against each entry's keywords. To swap
 * in a real AI API later, replace the body of getResponse() with a fetch
 * to your endpoint (keeping it async) — everything else, including the
 * quick-question chips as suggested prompts, can stay exactly as is:
 *
 *   async function getResponse(input: string): Promise<string> {
 *     const res = await fetch("/api/chat", {
 *       method: "POST",
 *       body: JSON.stringify({ message: input }),
 *     });
 *     const data = await res.json();
 *     return data.reply;
 *   }
 */
function getResponse(input: string): string {
  const lower = input.toLowerCase();
  const match = CHATBOT_QA.find((qa) => qa.keywords.some((kw) => lower.includes(kw)));
  return match?.answer ?? chatbotFallback;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Sadew's portfolio assistant. Ask me anything below 👇" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const askQuestion = (question: string, answer: string) => {
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: answer, animate: true }]);
    }, 400);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const reply = getResponse(trimmed);
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply, animate: true }]);
    }, 400);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-40">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-lamp text-[#1A1206] shadow-lg transition hover:brightness-110"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Bot size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="absolute bottom-[4.5rem] left-0 flex h-[28rem] max-h-[70vh] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lamp/15">
                <Sparkles size={15} className="text-lamp" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">Portfolio Assistant</p>
                <p className="text-xs text-muted">Hard-coded for now — real AI coming soon</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <ChatMessage key={i} role={m.role} text={m.text} animate={m.animate} />
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-3">
              {CHATBOT_QA.map((qa) => (
                <button
                  key={qa.question}
                  onClick={() => askQuestion(qa.question, qa.answer)}
                  className="rounded-full border border-border px-3 py-1 text-[11px] text-muted transition-colors hover:border-lamp hover:text-lamp"
                >
                  {qa.question}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Or type your own question..."
                className="flex-1 rounded-full border border-border bg-bg px-4 py-2 text-xs outline-none focus:border-lamp"
              />
              <button
                onClick={handleSend}
                aria-label="Send"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-lamp text-[#1A1206]"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}