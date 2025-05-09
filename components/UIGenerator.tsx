"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaMagic, FaRegCopy } from "react-icons/fa";

// 2D Cloud SVG Background
const CloudBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    style={{ filter: "blur(1.2px)" }}
    aria-hidden="true"
    viewBox="0 0 1440 900"
    preserveAspectRatio="none"
  >
    {/* Large cloud */}
    <g opacity="0.32">
      <ellipse cx="350" cy="180" rx="120" ry="60" fill="#fff" />
      <ellipse cx="420" cy="200" rx="80" ry="50" fill="#f3f0ff" />
      <ellipse cx="300" cy="210" rx="60" ry="40" fill="#f8fafc" />
      <ellipse cx="390" cy="150" rx="50" ry="30" fill="#f3f0ff" />
    </g>
    {/* Medium cloud */}
    <g opacity="0.25">
      <ellipse cx="1100" cy="120" rx="90" ry="40" fill="#fff" />
      <ellipse cx="1170" cy="140" rx="60" ry="30" fill="#f3f0ff" />
      <ellipse cx="1050" cy="150" rx="40" ry="20" fill="#f8fafc" />
    </g>
    {/* Small cloud */}
    <g opacity="0.18">
      <ellipse cx="800" cy="300" rx="50" ry="22" fill="#fff" />
      <ellipse cx="830" cy="315" rx="30" ry="15" fill="#f3f0ff" />
    </g>
    {/* Bottom left cloud */}
    <g opacity="0.22">
      <ellipse cx="180" cy="800" rx="100" ry="40" fill="#fff" />
      <ellipse cx="250" cy="820" rx="60" ry="25" fill="#f3f0ff" />
    </g>
    {/* Bottom right cloud */}
    <g opacity="0.19">
      <ellipse cx="1300" cy="850" rx="90" ry="35" fill="#fff" />
      <ellipse cx="1370" cy="870" rx="50" ry="20" fill="#f3f0ff" />
    </g>
    {/* Center faint cloud */}
    <g opacity="0.13">
      <ellipse cx="720" cy="600" rx="180" ry="60" fill="#fff" />
      <ellipse cx="800" cy="630" rx="90" ry="30" fill="#f3f0ff" />
    </g>
  </svg>
);

type Message = {
  role: "user" | "ai";
  content: React.ReactNode;
  text?: string; // For AI explanation
  code?: string; // For AI code
};

export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "👋 Hi! Describe the UI you want and I'll generate a beautiful page and the code for you.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [showCodeIdx, setShowCodeIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [latestCode, setLatestCode] = useState<string | undefined>(undefined);

  // Only scroll to bottom when a new message is added (not on mount)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Scroll to bottom on new message
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const prompt = input.trim();
    setMessages((msgs) => [
      ...msgs,
      { role: "user", content: prompt },
    ]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.text && data.code) {
        setMessages((msgs) => [
          ...msgs,
          {
            role: "ai",
            content: data.text,
            text: data.text,
            code: data.code,
          },
        ]);
        setLatestCode(data.code);
      } else {
        setMessages((msgs) => [
          ...msgs,
          {
            role: "ai",
            content: "Sorry, I couldn't generate a response. Please try again.",
          },
        ]);
        setLatestCode(undefined);
      }
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        {
          role: "ai",
          content: "Error contacting AI service. Please try again later.",
        },
      ]);
      setLatestCode(undefined);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (idx: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center font-sans bg-gradient-to-br from-yellow-50 via-white to-purple-100 relative">
      {/* 2D Cloud Background */}
      <CloudBackground />
      {/* Chat Container */}
      <div
        className="w-full max-w-6xl flex flex-col flex-1 bg-white/90 rounded-3xl border-3 border-black shadow-[8px_8px_0px_0px_#000] mt-10 mb-8 relative overflow-hidden z-10"
        style={{
          boxShadow:
            "8px 8px 0px 0px #000, inset 0 4px 32px 0 rgba(80, 60, 180, 0.10), inset 0 1.5px 0 0 #e9d8fd",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-8 pt-8 pb-4 border-b-2 border-yellow-200 bg-white/80 z-10">
          <FaMagic className="text-3xl text-purple-700" />
          <h1 className="text-3xl font-black text-gray-800 font-heading">
            AI UI Generator
          </h1>
        </div>
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-6" style={{ minHeight: 400, maxHeight: 520 }}>
          {messages.map((msg, idx) =>
            msg.role === "user" ? (
              <div key={idx} className="flex justify-end">
                <div className="max-w-[80%] bg-yellow-100 border-2 border-yellow-300 text-yellow-900 px-5 py-3 rounded-2xl shadow font-mono text-base">
                  {msg.content}
                </div>
              </div>
            ) : (
              <div key={idx} className="flex justify-start">
                <div className="max-w-[80%] bg-purple-50 border-2 border-purple-200 text-purple-900 px-5 py-4 rounded-2xl shadow-lg font-sans text-base flex flex-col gap-2">
                  {/* If first message, show as text. Otherwise, render as ReactNode (UI) */}
                  {idx === 0 ? (
                    <span className="font-medium">{msg.content}</span>
                  ) : (
                    <span className="font-medium whitespace-pre-line">{msg.text || msg.content}</span>
                  )}
                </div>
              </div>
            )
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] bg-purple-50 border-2 border-purple-200 text-purple-900 px-5 py-4 rounded-2xl shadow-lg font-sans text-base flex items-center gap-2 animate-pulse">
                <FaMagic className="text-purple-400" />
                Generating UI...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        {/* Code Area: Only show if latest AI message has code */}
        {latestCode && (
          <div className="px-8 pb-8">
            <div className="p-6 bg-white rounded-2xl border-2 border-yellow-300 shadow-lg mt-4 relative">
              <button
                className={`absolute top-4 right-4 text-xs flex items-center gap-1 bg-purple-200 text-purple-900 px-2 py-1 rounded-full font-semibold hover:bg-purple-300 transition shadow z-10 ${
                  copiedIdx === messages.length ? "opacity-70" : ""
                }`}
                onClick={() => handleCopy(messages.length, latestCode)}
                type="button"
              >
                <FaRegCopy />
                {copiedIdx === messages.length ? "Copied!" : "Copy"}
              </button>
              <pre className="whitespace-pre-wrap bg-gray-900 text-green-200 rounded-xl p-4 overflow-x-auto text-xs font-mono border-2 border-yellow-300 mt-2">
                <code>{latestCode}</code>
              </pre>
            </div>
          </div>
        )}
        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-3 px-6 py-6 border-t-2 border-yellow-200 bg-white/80"
        >
          <input
            type="text"
            className="flex-1 px-6 py-4 rounded-xl border-2 border-purple-600 focus:border-black outline-none text-lg bg-purple-50/60 shadow-inner transition-all duration-200 font-mono focus:shadow-lg"
            placeholder="Describe the UI you want (e.g. A login form with email and password)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            disabled={loading}
            autoFocus
            spellCheck={false}
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full border-2 border-blue-700 font-bold text-lg shadow-lg transition-all duration-200 disabled:opacity-60 flex items-center gap-2"
            disabled={loading || !input.trim()}
          >
            <FaMagic className="text-purple-700" />
            {loading ? "Generating..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
