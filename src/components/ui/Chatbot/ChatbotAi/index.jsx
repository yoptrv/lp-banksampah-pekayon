import { useState, useEffect, useRef } from "react";

export default function ChatbotAI({ onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hai! Saya asisten AI Bank Sampah Pekayon. Ada yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // Auto scroll ke bawah
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "🙏 Maaf, sistem sedang mengalami gangguan. Silakan coba lagi nanti.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[560px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-semibold leading-tight">Bank Sampah Pekayon</p>
          <p className="text-xs text-white/80 flex items-center gap-1">
            🤖 Live Chat AI
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto bg-[#F6F7FB] text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[80%] leading-relaxed ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-2xl text-xs text-gray-400 shadow-sm">
              AI sedang mengetik…
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="p-3 border-t bg-white flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Tulis pertanyaan di sini…"
          className="
            flex-1
            px-4 py-2
            rounded-full
            border border-gray-300
            text-sm
            focus:outline-none
            focus:border-purple-500
          "
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-purple-600 text-white
            hover:bg-purple-700
            transition
            disabled:opacity-50
          "
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
