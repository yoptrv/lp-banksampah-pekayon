import { useState } from "react";
import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "Bagaimana cara mendaftar menjadi nasabah Bank Sampah?",
      a: "Warga dapat melakukan pendaftaran melalui https://banksampah.jakarta.go.id dengan melengkapi data diri, memilih Bank Sampah Kelurahan Pekayon, dan menunggu persetujuan dari pengelola.",
    },
    {
      q: "Bagaimana mekanisme kerja Bank Sampah?",
      a: "Nasabah memilah sampah dari rumah, menyetorkannya sesuai jadwal, kemudian sampah ditimbang dan dicatat sebagai tabungan berdasarkan jenis dan beratnya.",
    },
    {
      q: "Apa saja manfaat bergabung dengan Bank Sampah?",
      a: "Selain menjaga lingkungan, nasabah mendapatkan manfaat ekonomi berupa tabungan dari sampah serta ikut mengurangi volume sampah ke TPA.",
    },
  ];

  return (
    <section id="faq">
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden h-[180px]">
              <Image
                src="/faqs/sampah.jpg"
                alt="Bank Sampah"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden h-[180px]">
              <Image
                src="/faqs/reboisasi.jpg"
                alt="Pengelolaan Sampah"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-2 rounded-2xl overflow-hidden h-[320px]">
              <Image
                src="/faqs/bersih.jpg"
                alt="Lingkungan Bersih"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT  */}
          <div>
            <span className="inline-flex items-center gap-2 text-lg font-semibold text-green-700 mb-3">
              <RiHome2Fill className="text-green-700 text-base" />
              FAQs
            </span>
            <h2 className="text-4xl font-bold  leading-tight mb-4">
              Semua Tentang <br /> Bank Sampah
            </h2>

            <p className="text-black/70 mb-8 max-w-md">
              Kami memahami bahwa pengelolaan sampah bisa terasa rumit. Berikut
              beberapa pertanyaan yang sering diajukan untuk membantu Anda
              memahami Bank Sampah Kelurahan Pekayon.
            </p>

            {/* FAQ LIST */}
            <div className="space-y-4">
              {faqs.map((item, i) => {
                const isOpen = active === i;

                return (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl px-6 py-4"
                  >
                    <button
                      onClick={() => setActive(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-green-900">
                        {i + 1}. {item.q}
                      </span>

                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-4 text-sm text-black/70 leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
