import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const handleNavigate = async (item) => {
    if (item.sectionId) {
      if (router.pathname !== "/") {
        await router.push("/");
      }

      setTimeout(() => {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      router.push(item.href);
    }
  };

  const footerMenu = [
    { label: "Jadwal", sectionId: "jadwal" },
    { label: "Cara Kerja", sectionId: "cara-kerja" },
    { label: "Kategori Sampah", sectionId: "kategori" },
    { label: "Tentang", href: "/about" },
    { label: "FAQs", sectionId: "faq" },
    { label: "Tanya Kami", href: "/contact" },
  ];

  return (
    <footer className="bg-[#191A23] text-white mt-24 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ================= TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* LOGO & NAV */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Image
                src="/kelurahan.png"
                alt="Kelurahan Pekayon"
                width={42}
                height={42}
              />
              <span className="font-semibold text-lg">Kelurahan Pekayon</span>
            </div>

            <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
              {footerMenu.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigate(item)}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <span className="inline-block mb-4  rounded  text-white text-sm font-medium">
              Hubungi Kami
            </span>

            <ul className="space-y-3 text-sm text-gray-300 max-w-sm mx-auto md:mx-0">
              <li>Email: kel_pekayon@jakarta.go.id</li>
              <li>Telepon: (+62) 857-7402-5605</li>
              <li>
                Jl. Madrasah No.3, RT.3/RW.9, Pekayon, Kec. Ps. Rebo, Kota
                Jakarta Timur, DKI Jakarta 13710
              </li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div>
            <span className="inline-block mb-4 px-3 py-1 rounded  text-white text-sm font-medium">
              Pihak Terkait
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center md:justify-items-start">
              {[
                "/kelurahan.png",
                "/partners/aptikom.png",
                "/partners/logo-dki.png",
                "/partners/gunadarma.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-20 h-20 rounded-lg p-3"
                >
                  <Image
                    src={src}
                    alt=""
                    width={64}
                    height={64}
                    className={`object-contain ${
                      src.includes("gunadarma") ? "scale-190" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM  */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-gray-400">
            © 2025 PTElus. All Rights Reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
            <button
              onClick={() => router.push("/privacy-policy")}
              className="text-xs hover:text-white"
            >
              Privacy Policy
            </button>

            <div className="flex gap-3">
              <button className="hover:text-white">in</button>
              <button className="hover:text-white">f</button>
              <button className="hover:text-white">x</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
