import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-64 md:pb-40">
      <Image
        src="/wallpapers.png"
        alt="Bank Sampah Pekayon"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OPTIONAL DARK GRADIENT KIRI */}
      <div className="absolute inset-0 " />

      {/* GRADIENT BAWAH KE SECTION SELANJUTNYA */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-50 to-transparent z-10" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-start pt-28 md:pt-56">
        <div className="text-white max-w-3xl">
          <p className="mb-4 text-sm font-bold text-[#213D34]">
            Program lingkungan, Pekayon
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#213D34]/90 ">
            Bank Sampah
            <br />
            Pekayon
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-2">
            <Link
              href="/contact"
              className="
                px-8 py-4 rounded-full font-semibold
                bg-white/60 !text-black
                border border-black/20
                transition-all duration-200

                hover:bg-transparent hover:!text-white

                active:bg-white active:!text-black active:border-white
            "
            >
              Tanya Kami
            </Link>

            <button
              onClick={async () => {
                if (router.pathname !== "/") {
                  await router.push("/");
                }

                setTimeout(() => {
                  const el = document.getElementById("cara-kerja");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }, 300);
              }}
              className="
                px-8 py-4 rounded-full font-semibold
                bg-transparent cursor-pointer
                border border-black/20
                transition-all duration-200

                hover:bg-white/60 hover:!text-black/70

                active:bg-white active:!text-black active:border-white
            "
            >
              Cara Kerja
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING INFO CARD — POJOK KANAN BAWAH HERO */}
      <div
        className="
    absolute 
    -bottom-10
    left-1/2 -translate-x-1/2
    md:left-auto md:translate-x-0 md:right-6
    z-20
    w-[calc(100%-2rem)]
    md:w-auto
  "
      >
        <div
          className="
      relative overflow-hidden
      bg-white rounded-2xl shadow-2xl
      px-6 py-5
      grid grid-cols-2 md:grid-cols-4
      gap-y-6 gap-x-8
      max-w-5xl
    "
        >
          {/* GRADIENT BAWAH */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#e6f4ee] to-transparent" />

          {/* ITEM */}
          <div className="text-center ">
            <p className="text-2xl font-semibold text-[#276749]">1.250+</p>
            <p className="text-xs text-gray-500 mt-1">Nasabah Aktif</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-[#276749]">12 Ton</p>
            <p className="text-xs text-gray-500 mt-1">Sampah Terkelola</p>
          </div>

          <div className="text-center mb-20">
            <p className="text-2xl font-semibold text-[#276749]">Rp 350 jt</p>
            <p className="text-xs text-gray-500 mt-1">Total Tabungan</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-[#276749]">2019</p>
            <p className="text-xs text-gray-500 mt-1">Berdiri Sejak</p>
          </div>
        </div>
      </div>
    </section>
  );
}
