import Head from "next/head";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bank Sampah Kelurahan Pekayon</title>
        <meta
          name="description"
          content="Bank Sampah Kelurahan Pekayon – Kelola sampah menjadi tabungan bernilai ekonomi"
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="bg-[#FFF0CC]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div className="max-w-xl">
              <h1 className="font-bold text-[#191A23] leading-tight mb-5 text-3xl sm:text-4xl md:text-5xl">
                Bank Sampah <br />
                <span className="text-[#276749]">Kelurahan Pekayon</span>
              </h1>

              <p className="text-gray-700 mb-8 text-sm sm:text-base">
                Program pengelolaan sampah berbasis masyarakat yang mengubah
                sampah rumah tangga menjadi tabungan bernilai ekonomi.
              </p>

              <div className="flex gap-3">
                <Button className="bg-[#276749] text-white px-8 py-3">
                  Daftar Sekarang
                </Button>
                <Button className="border border-[#276749] text-[#276749] px-8 py-3">
                  Cara Kerja
                </Button>
              </div>
            </div>

            {/* VISUAL */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 md:h-72 rounded-2xl bg-white shadow flex items-center justify-center text-gray-400">
                Ilustrasi / Foto Kegiatan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-5">Tentang Bank Sampah</h2>
            <p className="text-gray-700 leading-relaxed">
              Bank Sampah Kelurahan Pekayon merupakan program pengelolaan sampah
              berbasis masyarakat yang memungkinkan warga menabung sampah
              anorganik seperti plastik, kertas, dan logam.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CARA KERJA ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-center mb-12 md:mb-16 text-2xl md:text-3xl">
            Cara Kerja
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pilah sampah dari rumah",
              "Setor ke Bank Sampah",
              "Sampah ditimbang dan dicatat",
              "Saldo tabungan bertambah",
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-[#276749] font-bold text-xl mb-3">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#276749]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <h2 className="mb-6 text-2xl md:text-3xl">
            Ayo Jadi Bagian dari Perubahan
          </h2>
          <p className="mb-10 opacity-90 text-sm sm:text-base">
            Mulai dari rumah dan dari sampah kecil, kita ciptakan lingkungan
            yang lebih bersih dan bernilai.
          </p>

          <Button className="bg-white text-[#276749] px-10 py-4 w-full sm:w-auto">
            Gabung Sekarang
          </Button>
        </div>
      </section>
    </>
  );
}
