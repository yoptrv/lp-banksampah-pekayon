import { useState } from "react";
import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      const res = await emailjs.send(
        "service_dxq0ugr", 
        "template_emy1d3a", 
        {
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          message: form.message.value,
        },
        "ChHdkA5pwdsMI3bVl", 
      );

      if (res.status === 200) {
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      console.log("Email error:", err);
      alert("Gagal mengirim pesan.");
    }

    setLoading(false);
  };

  return (
    <main className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold  mb-2">
            <RiHome2Fill className="text-green-700 text-base" />
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold ">
            Punya Pertanyaan? <br /> Kami Siap Membantu!
          </h1>

          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            Silakan hubungi Bank Sampah Kelurahan Pekayon melalui form di bawah
            ini. Tim kami akan segera merespons pesan Anda.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
          {/* LEFT INFO */}
          <div className="relative rounded-2xl overflow-hidden text-white p-8 min-h-[420px] flex flex-col justify-between">
            {/* BACKGROUND IMAGE */}
            <Image
              src="/contact.jpg"
              alt="Bank Sampah Pekayon"
              fill
              className="object-cover"
              priority
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3">Informasi Kontak</h3>

              <p className="text-white/80 mb-50">
                Siap membantu Anda dalam pengelolaan sampah dan layanan Bank
                Sampah.
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  📧 <span>rahmatrizkyrifai@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  📍 <span>Kelurahan Pekayon, Jakarta Timur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Nama Lengkap*"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
              <input
                name="phone"
                required
                placeholder="Nomor Telepon*"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-full bg-green-400 text-white font-medium hover:bg-green-800 transition"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {success && (
              <p className="text-green-700 text-sm mt-2">
                ✅ Pesan berhasil dikirim. Admin akan menghubungi Anda.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
