import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";

export default function ProfilPage() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
          </div>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-b from-green-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <span className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-green-700 text-white text-sm font-medium">
            <RiHome2Fill className="mr-2 text-base" />
            Tentang Kami
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Bank Sampah <br />
            Kelurahan Pekayon
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-black/70 text-lg">
            Inisiatif pengelolaan sampah berbasis masyarakat untuk menciptakan
            lingkungan yang bersih, bernilai, dan berkelanjutan.
          </p>
        </div>
      </section>

      {/* ================= APA ITU BANK SAMPAH ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Apa Itu Bank Sampah?
            </h2>

            <p className="text-black/80 mb-4">
              Bank Sampah adalah sistem pengelolaan sampah yang mengadopsi
              prinsip seperti perbankan, di mana masyarakat dapat{" "}
              <strong className="text-green-800">menabung sampah</strong> yang telah dipilah dan
              mendapatkan nilai ekonomi dari sampah tersebut.
            </p>

            <p className="text-black/80">
              Melalui Bank Sampah, sampah tidak lagi dianggap sebagai limbah,
              melainkan sebagai <strong className="text-green-800">sumber daya</strong>
            , yang dapat dikelola, didaur ulang, dan dimanfaatkan kembali demi
              kelestarian lingkungan.
            </p>
          </div>

          <div className="relative h-[320px] rounded-3xl overflow-hidden">
            <Image
              src="/bs.jpg"
              alt="Bank Sampah"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= BANK SAMPAH PEKAYON ================= */}
      <section className="py-24 bg-[#F5F7F6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Bank Sampah Kelurahan Pekayon
          </h2>

          <p className="max-w-3xl mx-auto text-black/80">
            Bank Sampah Kelurahan Pekayon hadir sebagai bentuk komitmen
            pemerintah kelurahan dan masyarakat dalam mengelola sampah secara
            bertanggung jawab. Program ini bertujuan untuk meningkatkan
            kesadaran warga, mengurangi volume sampah ke TPA, serta mendorong
            ekonomi sirkular di tingkat kelurahan.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Berbasis Masyarakat",
                desc: "Dikelola bersama warga untuk warga",
              },
              {
                title: "Ramah Lingkungan",
                desc: "Mendukung pengurangan dan daur ulang sampah",
              },
              {
                title: "Bernilai Ekonomi",
                desc: "Sampah ditukar menjadi saldo tabungan",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-green-800/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISI MISI ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Visi</h3>
            <p className="text-black/80">
              Mewujudkan lingkungan Kelurahan Pekayon yang bersih, sehat, dan
              berkelanjutan melalui pengelolaan sampah yang terintegrasi dan
              partisipatif.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Misi</h3>
            <ul className="list-disc list-inside space-y-2 text-black/80">
              <li>Mengedukasi masyarakat tentang pemilahan sampah</li>
              <li>Mendorong pengurangan sampah rumah tangga</li>
              <li>Meningkatkan nilai ekonomi dari sampah</li>
              <li>Mendukung program lingkungan berkelanjutan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TIM PENGEMBANG ================= */}
      <section className="py-24 bg-[#0b1f17] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Tim Pengembang Aplikasi</h2>

          <p className="max-w-2xl mx-auto text-white/70 mb-12">
            Website dan aplikasi Bank Sampah Kelurahan Pekayon dikembangkan
            sebagai bentuk kontribusi teknologi untuk mendukung pengelolaan
            sampah yang lebih modern, transparan, dan mudah diakses oleh
            masyarakat.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "UI/UX Designer",
              "Frontend Developer",
              "Backend Developer",
              "Project Coordinator",
            ].map((role, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-600 mb-4" />
                <h4 className="font-semibold">{role}</h4>
                <p className="text-sm text-white/60 mt-1">Tim Pengembang</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-20 text-center">
        <p className="text-green-900 text-lg font-medium">
          “Sampah hari ini adalah sumber daya untuk masa depan.”
        </p>
      </section>
    </main>
  );
}
