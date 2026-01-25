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
  const [openLogin, setOpenLogin] = useState(false);

  const handleNavigate = async (item) => {
    setOpenLogin(false);
    onClose();

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
    } else {
      setActiveSection(null);
      router.push(item.href);
    }
  };

  const handleLogin = (url) => {
    setOpenLogin(false);
    onClose();
    window.location.href = url;
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => {
          setOpenLogin(false);
          onClose();
        }}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-md
          transition-opacity duration-500
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* PRELAYERS */}
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

      {/* MAIN PANEL */}
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
          <button onClick={onClose} className="text-2xl cursor-pointer">
            ✕
          </button>
        </div>

        {/* MENU */}
        <nav className="px-6 pt-4 sm:pt-12 space-y-6">
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
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* ===== MASUK (DROPDOWN) ===== */}
          <div
            style={{
              transitionDelay: open ? `${menuItems.length * 80}ms` : "0ms",
            }}
            className={`
              transition-all duration-700 ease-out
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <button
              onClick={() => setOpenLogin((p) => !p)}
              className={`
                group flex items-center gap-4 w-full text-left
                text-5xl font-bold tracking-tight
                ${
                  openLogin
                    ? "text-[#19c37d]"
                    : "text-white/40 hover:text-white/70"
                }
              `}
            >
              <span
                className={`
                  h-[2px] w-8 bg-[#19c37d]
                  origin-left transition-all duration-300
                  ${
                    openLogin
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }
                `}
              />
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                Masuk
              </span>
              <span className="text-xl ">{openLogin ? "▴" : "▾"}</span>
            </button>

            {/* DROPDOWN */}
            {openLogin && (
              <div className="ml-12 mt-4 space-y-3">
                <button
                  onClick={() =>
                    handleLogin(
                      "https://bank-sampah-pekayon-fe-rw-kelurahan.vercel.app",
                    )
                  }
                  className="block text-xl text-white/60 hover:text-white transition cursor-pointer"
                >
                  - Kelurahan / RW
                </button>
                <button
                  onClick={() =>
                    handleLogin(
                      "https://wargabanksampahpekayon.vercel.app/login",
                    )
                  }
                  className="block text-xl text-white/60 hover:text-white transition cursor-pointer"
                >
                  - Warga
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* FOOT */}
        <div className="absolute bottom-8 left-6 right-6">
          <button
            onClick={() => handleNavigate({ href: "/contact" })}
            className="w-full py-3 rounded-full bg-[#276749] hover:bg-[#1e4d36] transition-colors text-white font-semibold"
          >
            Tanya Kami
          </button>
        </div>
      </aside>
    </>
  );
}
