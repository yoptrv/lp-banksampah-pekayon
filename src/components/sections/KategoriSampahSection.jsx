import Link from "next/link";
import { kategoriSampah } from "./data/kategoriSampah";
import { RiHome2Fill } from "react-icons/ri";


export default function KategoriSampahSection() {
  const kering = kategoriSampah.find((k) => k.title.includes("Kering"));
  const lainnya = kategoriSampah.filter((k) => !k.title.includes("Kering"));

  return (
    <section id="kategori">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* ===== LAYOUT UTAMA ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* KIRI*/}
            <div>
              {/* HEADER */}
              <div className="flex items-center gap-2 mb-2">
                <RiHome2Fill className="text-green-700 text-base" />
                <p className="text-lg font-semibold text-green-700">
                  Kategori Sampah
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold  leading-tight">
                Kenali Jenis Sampah
                <br />
                untuk Pengelolaan yang Tepat
              </h2>

              <p className="mt-4 text-black/80 max-w-md">
                Setiap jenis sampah memiliki cara pengelolaan yang berbeda.
                Pilih kategori untuk melihat detailnya.
              </p>
              {/* CTA LIHAT KATEGORI */}
              <Link
                href="/category"
                className="
                inline-flex items-center gap-2 mt-6
                bg-green-700 px-6 py-2 rounded-full
                hover:bg-green-900
                !text-white font-semibold
                transition-colors
              "
              >
                Lihat Kategori
              </Link>

              {/* CARD BESAR — PLASTIK */}
              <Link
                href={kering.href}
                className="group relative mt-10 block h-[295px] overflow-hidden rounded-3xl"
              >
                <img
                  src={kering.image}
                  alt={kering.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{kering.title}</h3>
                  <p className="text-sm text-white/80">{kering.description}</p>
                </div>
              </Link>
            </div>

            {/* ===== KANAN ===== */}
            <div className="grid gap-6">
              {lainnya.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative h-[180px] overflow-hidden rounded-3xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-xs text-white/80">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
