import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button/Button";

const menus = [
  { label: "Beranda", href: "/" },
  { label: "Tutorial", href: "/tutorial" },
  { label: "Jadwal", href: "/jadwal" },
  { label: "Riwayat", href: "/riwayat" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* LEFT — LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/kelurahan.png"
              alt="Kelurahan Pekayon"
              width={36}
              height={36}
            />
            <span className="font-semibold text-sm sm:text-base">
              Bank Sampah Pekayon
            </span>
          </div>

          {/* CENTER — MENU */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {menus.map((menu) => {
              const isActive = router.pathname === menu.href;

              return (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className={`px-4 py-1 rounded-full transition ${
                      isActive
                        ? "bg-[#276749] !text-white"
                        : "text-gray-700 hover:text-[#276749]"
                    }`}
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT — ACTION */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="px-5 py-2 text-sm">
              Sign In
            </Button>

            <Button className="px-5 py-2 text-sm bg-[#D9CBA6] text-[#276749]">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
