import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Hero() {
  const router = useRouter();

  // ===========================
  // STATE UNTUK DATA API
  // ===========================
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // FETCH DATA API
  // ===========================
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://m0bnqlsf-5000.asse.devtunnels.ms/api/home/stats",
        );

        if (!res.ok) throw new Error("Gagal fetch statistik");

        const data = await res.json();

        // Contoh expected response:
        // [
        //   { "value": "1.250+" },
        //   { "value": "12 Ton" },
        //   { "value": "Rp 350 jt" },
        //   { "value": "2019" }
        // ]

        setStats(data);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-64 md:pb-40">
      <Image
        src="/banner/bg1.png"
        alt="Bank Sampah Pekayon"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-50 to-transparent z-10" />

      {/* CONTENT TEKS */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-start pt-28 md:pt-56">
        <div className="text-white max-w-3xl">
          <p className="mb-4 text-sm font-bold text-[#213D34]">
            Program lingkungan, Pekayon
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#213D34]">
            URAI
            <br />
            <span className="text-white/90">Bank Sampah</span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-2">
            <Link
              href="/contact"
              className="
                w-full sm:w-auto text-left
                px-8 py-4 rounded-full font-semibold
                bg-white/60 !text-black
                border border-black/20
                transition-all duration-200
                hover:bg-transparent hover:!text-[#213D34]
                active:bg-white active:!text-black active:border-white
              "
            >
              Masuk
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
                w-full sm:w-auto text-left
                px-8 py-4 rounded-full font-semibold
                bg-transparent cursor-pointer !text-[#213D34]
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#e6f4ee] to-transparent" />
          {[
            { label: "Nasabah Aktif" },
            { label: "Sampah Terkelola" },
            { label: "Total Tabungan" },
            { label: "Berdiri Sejak" },
          ].map((item, index) => {
            const apiItem = stats[index];

            return (
              <div key={index} className="text-center mb-10">
                <p className="text-2xl font-semibold text-[#276749]">
                  {apiItem?.value || "-"}
                </p>
                <p className="text-xs text-gray-700 mt-1">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
