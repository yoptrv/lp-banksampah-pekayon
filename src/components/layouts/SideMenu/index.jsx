import { useRouter } from "next/router";
import { useState } from "react";

const menuItems = [
  { label: "Beranda", href: "/", sectionId: "beranda" },
  { label: "Jadwal", href: "/", sectionId: "jadwal" },
  { label: "Cara Kerja", href: "/", sectionId: "cara-kerja" },
  { label: "Kategori", href: "/", sectionId: "kategori" },
  { label: "Tentang", href: "/about" },
];

export default function SideMenu({ open, onClose }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(null);

  const handleNavigate = async (item) => {
    onClose();

    // ===== SECTION (HOME) =====
    if (item.sectionId) {
      setActiveSection(item.sectionId);

      if (router.pathname !== "/") {
        await router.push("/");
      }

      setTimeout(() => {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
    // ===== PAGE =====
    else {
      setActiveSection(null);
      router.push(item.href);
    }
  };

  return (
    <>
      {/* ================= OVERLAY ================= */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-md
          transition-opacity duration-500
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ================= PRELAYERS ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[85%] sm:w-[420px] z-40
          transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="absolute inset-0 bg-[#1f6f54]" />
        <div className="absolute inset-0 bg-[#0b3d2e] delay-75" />
      </div>

      {/* ================= MAIN PANEL ================= */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[85%] sm:w-[420px] z-50
          bg-[#0b1f17] text-white
          transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-16">
          <button onClick={onClose} className="text-2xl">
            ✕
          </button>
        </div>

        {/* ================= MENU ================= */}
        <nav className="px-6 pt-12 space-y-6">
          {menuItems.map((item, i) => {
            const isActive =
              (item.sectionId && activeSection === item.sectionId) ||
              (!item.sectionId && router.pathname === item.href);

            return (
              <button
                key={item.label}
                onClick={() => handleNavigate(item)}
                style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
                className={`
                  group flex items-center gap-4 w-full text-left
                  text-5xl font-bold tracking-tight
                  transition-all duration-700 ease-out
                  ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  ${
                    isActive
                      ? "text-[#19c37d]"
                      : "text-white/40 hover:text-white/70"
                  }
                `}
              >
                {/* LINE INDICATOR */}
                <span
                  className={`
                    h-[2px] w-8 bg-[#19c37d]
                    origin-left transition-all duration-300
                    ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }
                  `}
                />

                {/* TEXT */}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ================= FOOT ================= */}
        <div className="absolute bottom-8 left-6 right-6 flex gap-4">
          <button className="flex-1 py-3 rounded-full border border-white/30">
            Sign In
          </button>

          <button
            onClick={() => handleNavigate({ href: "/contact" })}
            className="flex-1 py-3 rounded-full bg-[#276749] cursor-pointer hover:bg-[#1e4d36] transition-colors text-white font-semibold"
          >
            Tanya Kami
          </button>
        </div>
      </aside>
    </>
  );
}
