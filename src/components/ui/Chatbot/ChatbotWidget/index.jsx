import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import ChatbotAI from "../ChatbotAi";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(null); // null | "ai"
  const [showHint, setShowHint] = useState(false);

  // Auto welcome bubble
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const socials = [
    {
      label: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500 text-xl" />,
      href: "https://wa.me/62xxxxxxxxxx",
      bg: "bg-green-50 hover:bg-green-100",
    },
    {
      label: "Telegram",
      icon: <FaTelegramPlane className="text-sky-500 text-xl" />,
      href: "https://t.me/username",
      bg: "bg-sky-50 hover:bg-sky-100",
    },
    {
      label: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-xl" />,
      href: "https://instagram.com/username",
      bg: "bg-pink-50 hover:bg-pink-100",
    },
  ];

  return (
    <>
      {/* WELCOME HINT */}
      {showHint && !open && (
        <div className="fixed bottom-24 right-24 z-40 bg-white px-4 py-2 rounded-xl shadow-lg text-sm text-gray-700 animate-fade-in">
          👋 Butuh bantuan?
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => {
          setOpen(!open);
          setMode(null);
          setShowHint(false);
        }}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-purple-600 text-white
          shadow-2xl
          flex items-center justify-center
          hover:bg-purple-700
          transition
        "
        aria-label="Open chat"
      >
        {open ? "✕" : <RiRobot2Line className="text-2xl" />}
      </button>

      {/* LAUNCHER */}
      {open && !mode && (
        <div
          className="
            fixed bottom-24 right-6 z-50
            bg-white rounded-3xl shadow-2xl
            px-4 py-4
            flex gap-3 items-center
            border border-gray-200
            animate-slide-up
          "
        >
          {/* LIVE CHAT AI */}
          <div className="group relative">
            <button
              onClick={() => setMode("ai")}
              className="
                w-12 h-12 rounded-full
                bg-purple-600 text-white
                flex items-center justify-center
                hover:bg-purple-700
                transition
              "
            >
              <RiRobot2Line className="text-2xl" />
            </button>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Live Chat 
            </span>
          </div>

          {/* SOCIALS */}
          {socials.map((s, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  transition
                  ${s.bg}
                `}
              >
                {s.icon}
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* CHATBOT AI */}
      {open && mode === "ai" && <ChatbotAI onClose={() => setMode(null)} />}
    </>
  );
}
