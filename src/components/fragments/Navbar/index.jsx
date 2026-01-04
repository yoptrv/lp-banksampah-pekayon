import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed left-0 w-full z-30
        transition-all duration-300
        ${scrolled ? "top-3" : "top-0"}
      `}
    >
      <div
        className={`
    mx-auto
    h-14 sm:h-16
    flex items-center justify-between
    transition-all duration-300 ease-out
    ${
      scrolled
        ? "max-w-6xl px-6 bg-white/95 backdrop-blur-md text-black rounded-4xl shadow-lg"
        : "max-w-7xl px-4 sm:px-6 bg-transparent text-white"
    }
  `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image src="/kelurahan.png" alt="" width={32} height={32} />
          <button
            type="button"
            onClick={() => router.push("/")}
            className={`
    font-semibold text-sm sm:text-base cursor-pointer
    transition-colors duration-300
    ${
      scrolled
        ? "text-black hover:text-black/70"
        : "text-[#213D34] hover:text-black/80"
    }
  `}
          >
            Kelurahan Pekayon Jakarta
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* PHONE – DESKTOP ONLY */}
          {/* <p
            className={`hidden md:block ${
              scrolled ? "text-black/70" : "text-white/90"
            }`}
          >
            +62xxxx-xxxx-xxx
          </p> */}

          {/* SIGN IN – DESKTOP ONLY */}
          <button
            className={`
    hidden md:block
    text-sm font-bold cursor-pointer
    transition-colors duration-300
    ${
      scrolled
        ? "text-black hover:text-black/70"
        : "text-[#213D34] hover:text-black/80"
    }
  `}
          >
            Sign In
          </button>

          {/* DIVIDER – DESKTOP ONLY */}
          <span
            className={`hidden md:block ${
              scrolled ? "text-black/40" : "text-white/40"
            }`}
          >
            |
          </span>

          {/* MENU BUTTON – ALWAYS */}
          <button
            onClick={onMenuClick}
            className={`
              px-3 sm:px-4 py-1.5
              rounded-full font-semibold text-sm
              border transition-all duration-300 cursor-pointer
              ${
                scrolled
                  ? "bg-black text-white border-black hover:bg-transparent hover:text-black"
                  : "bg-white text-black border-white hover:bg-transparent hover:text-white"
              }
            `}
          >
            ☰ <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
