import Image from "next/image";
import { kategoriSampah } from "@/data/kategoriSampah";
import { RiHome2Fill } from "react-icons/ri";


export default function CategoryPage() {
  const categories = Object.values(kategoriSampah);

  return (
    <main className="relative min-h-screen">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background-rand.png"
          alt="Kategori Sampah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>
      {/* ================= HEADER */}
      <section className="py-24 bg-gradient-to-b from-green-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-green-700 text-white text-sm font-medium">
            <RiHome2Fill className="mr-2 text-base" />
            Kategori Sampah
          </span>

          <h1 className="text-4xl md:text-5xl font-bold ">
            Kenali Jenis Sampah <br className="hidden sm:block" />
            dan Nilai Ekonominya
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-black/70">
            Setiap jenis sampah memiliki karakteristik dan nilai yang berbeda.
            Berikut daftar kategori sampah yang diterima oleh Bank Sampah
            Kelurahan Pekayon beserta harga dan informasinya.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              {/* CATEGORY HEADER */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="relative w-full md:w-64 h-40 rounded-2xl overflow-hidden">
                  <Image
                    src={`/kategori/${
                      category.title.toLowerCase().split(" ")[1]
                    }.jpg`}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold ">{category.title}</h2>
                  <p className="text-black mt-2">{category.description}</p>

                  {category.note && (
                    <p className="mt-2 text-sm text-black/60">
                      ℹ️ {category.note}
                    </p>
                  )}

                  {category.warning && (
                    <p className="mt-2 text-sm text-red-600">
                      ⚠️ {category.warning}
                    </p>
                  )}
                </div>
              </div>

              {/*  TABLE HARGA  */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-[#F5F7F6]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                        Jenis Sampah
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                        Deskripsi
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-black">
                        Harga
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {category.items.map((item, i) => (
                      <tr
                        key={i}
                        className="border-t border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-sm text-black">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-black">
                          {item.detail}
                        </td>
                        <td className="px-4 py-3 text-sm text-right font-semibold text-green-900">
                          {item.price === 0
                            ? "Tidak Bernilai"
                            : `Rp ${item.price.toLocaleString("id-ID")} / ${
                                item.unit
                              }`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
