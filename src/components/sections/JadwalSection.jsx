import { Clock, Recycle, MapPin, Calendar } from "lucide-react";
import { RiHome2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";


const schedules = [
  {
    day: "Senin",
    time: "08:00 – 12:00",
    type: "Plastik, Kertas",
    location: "Unit Utama – Pos RW 05",
  },
  {
    day: "Rabu",
    time: "09:00 – 13:00",
    type: "Logam, Kaca",
    location: "Kantor Kelurahan, Area Parkir",
  },
  {
    day: "Jumat",
    time: "08:00 – 11:00",
    type: "Semua Jenis (Kering)",
    location: "Unit Utama – Pos RW 05",
  },
  {
    day: "Minggu",
    time: "10:00 – 15:00",
    type: "Elektronik, Minyak Jelantah",
    location: "Pusat Daur Ulang Kota, Lantai 1",
  },
];

export default function JadwalSection() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="jadwal">
      <section
        className="relative w-full bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/jadwal.png')" }}
      >
        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-green-50/70 to-white" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <RiHome2Fill className="text-green-800 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Jadwal Setor Sampah
              </h2>
            </div>
            <p className="mt-2 text-black/50">
              Informasi waktu, jenis sampah, dan lokasi setoran Bank Sampah
            </p>
          </div>

          {/* REALTIME DATE & TIME */}
          {now && (
            <div className="mb-10 flex justify-center">
              <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md border border-black/50 rounded-2xl px-6 py-4 shadow-sm">
                {/* ICON */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full  text-black">
                  <Clock size={40} />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-black">
                    {now.toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-2xl font-bold text-green-900 tracking-wide">
                    {now.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TABLE HEADER */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 mb-3 text-sm font-semibold text-black">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> Hari
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> Jam Operasional
            </div>
            <div className="flex items-center gap-2">
              <Recycle size={16} /> Jenis Sampah
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Lokasi / Keterangan
            </div>
          </div>

          {/* TABLE BODY */}
          <div className="space-y-4">
            {schedules.map((item, index) => (
              <div
                key={index}
                className="
                grid grid-cols-1 md:grid-cols-4 gap-4
                items-center
                bg-white
                border border-green-100
                rounded-2xl
                px-6 py-5
                shadow-sm
              "
              >
                <div className="font-semibold text-green-800">{item.day}</div>

                <div className="text-text-black/60 text-sm flex items-center gap-2">
                  <Clock size={14} />
                  {item.time}
                </div>

                <div className="text-text-black/60 text-sm flex items-center gap-2">
                  <Recycle size={14} />
                  {item.type}
                </div>

                <div className="text-text-black/60 text-sm flex items-center gap-2">
                  <MapPin size={14} />
                  {item.location}
                </div>
              </div>
            ))}
          </div>

          {/* FOOT NOTE */}
          <p className="mt-6 text-sm text-yellow-900 text-center">
            * Jadwal dapat berubah mengikuti hari libur nasional
          </p>
        </div>
      </section>
    </section>
  );
}
