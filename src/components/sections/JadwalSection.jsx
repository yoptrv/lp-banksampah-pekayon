import { useEffect, useState } from "react";
import { Clock, Recycle, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { RiHome2Fill } from "react-icons/ri";

export default function JadwalSection() {
  const [now, setNow] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* ===============================
     REALTIME CLOCK
  =============================== */
  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ===============================
     FETCH API
  =============================== */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://m0bnqlsf-5000.asse.devtunnels.ms/api/schedule/collection/public"
        );
        if (!res.ok) throw new Error("Fetch error");

        const json = await res.json();
        setSchedules(json?.data?.data || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ===============================
     DATE HELPERS (WIB SAFE)
  =============================== */
  const toLocalDate = (date) => new Date(date).toLocaleDateString("sv-SE"); // YYYY-MM-DD

  const today = new Date().toLocaleDateString("sv-SE");

  const todaySchedules = schedules.filter(
    (s) => s.date && toLocalDate(s.date) === today && s.rw_list?.address
  );

  const uniqueAddresses = [
    ...new Set(todaySchedules.map((s) => s.rw_list.address)),
  ];

  /* ===============================
     FORMATTERS
  =============================== */
  const formatFullDate = (date) =>
    new Date(date).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatTime = (start, end) =>
    `${new Date(start).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })} – ${new Date(end).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;

  const googleMapsUrl = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

  /* ===============================
     RENDER
  =============================== */
  return (
    <section id="jadwal">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/jadwal.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-green-50/80 to-white" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="mb-12 text-center">
            <div className="flex justify-center items-center gap-3">
              <RiHome2Fill className="text-green-700 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Jadwal Setor Sampah
              </h2>
            </div>
            <p className="mt-2 text-black/50">
              Jadwal dan lokasi operasional Bank Sampah
            </p>
          </div>

          {/* REALTIME */}
          {now && (
            <div className="mb-12 flex justify-center">
              <div className="bg-white/90 backdrop-blur border rounded-2xl px-6 py-4 shadow-sm flex gap-4">
                <Clock size={36} />
                <div>
                  <p className="text-sm font-semibold">
                    {now.toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-2xl font-bold text-green-900">
                    {now.toLocaleTimeString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MAP CARDS (TODAY LOCATIONS) */}
          {!loading && uniqueAddresses.length > 0 && (
            <div className="mb-14 grid gap-6 sm:grid-cols-2">
              {uniqueAddresses.map((address, i) => (
                <a
                  key={i}
                  href={googleMapsUrl(address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden
                    rounded-3xl bg-white
                    border border-gray-200
                    p-6 shadow-sm
                    hover:shadow-md transition
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative flex gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-600 text-white shrink-0">
                      <MapPin size={26} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-gray-500">
                        Lokasi Bank Sampah Hari Ini
                      </p>

                      <p className="mt-1 text-lg md:text-xl font-bold text-gray-900 leading-snug">
                        {address}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-green-700 font-semibold">
                        Buka Google Maps
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* NO SCHEDULE TODAY */}
          {!loading && uniqueAddresses.length === 0 && (
            <p className="mb-12 text-center text-orange-700 font-semibold">
              ⚠️ Tidak ada jadwal setor sampah hari ini
            </p>
          )}

          {/* TABLE HEADER */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 mb-3 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> Tanggal
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> Jam
            </div>
            <div className="flex items-center gap-2">
              <Recycle size={16} /> Kegiatan
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Lokasi
            </div>
          </div>

          {/* STATES */}
          {loading && (
            <p className="text-center text-gray-500">Memuat jadwal...</p>
          )}
          {error && (
            <p className="text-center text-red-500">Gagal memuat data jadwal</p>
          )}

          {/* TABLE BODY */}
          {!loading && !error && (
            <div className="space-y-4">
              {schedules.map((item) => (
                <div
                  key={item.schedule_id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white border border-green-100 rounded-2xl px-6 py-5 shadow-sm"
                >
                  <div className="font-semibold text-green-800">
                    {formatFullDate(item.date)}
                  </div>

                  <div className="text-sm flex items-center gap-2">
                    <Clock size={14} />
                    {formatTime(item.start_time, item.end_time)}
                  </div>

                  <div className="text-sm flex items-center gap-2">
                    <Recycle size={14} />
                    {item.title}
                  </div>

                  <div className="text-sm flex items-center gap-2">
                    <MapPin size={14} />
                    {item.rw_list?.address || "-"}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FOOTNOTE */}
          <p className="mt-8 text-sm text-yellow-900 text-center">
            * Jadwal dapat berubah sewaktu-waktu
          </p>
        </div>
      </section>
    </section>
  );
}
