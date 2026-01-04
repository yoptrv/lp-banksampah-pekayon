import { useState } from "react";
import { steps } from "./data/CaraKerja";
import { RiHome2Fill } from "react-icons/ri";


export default function TutorSection() {
  const [active, setActive] = useState(0);
  const total = steps.length;

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="cara-kerja">
      <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT =*/}
          <div>
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <RiHome2Fill className="text-green-800 text-lg" />
                <h3 className="text-lg font-semibold text-green-800">
                  Cara Kerja
                </h3>
              </div>
              <span className="w-12 h-[1px] bg-green-700" />
              <p className="text-sm text-black/60">Proses pengelolaan sampah</p>
            </div>

            {/* STEP NUMBER */}
            <p className="text-5xl font-light text-green-700 mb-6">
              {String(active + 1).padStart(2, "0")}
            </p>

            {/* TITLE */}
            <h2 className="text-2xl font-bold  mb-4">{steps[active].title}</h2>

            {/* DESCRIPTION */}
            <p className="text-text-black/70 max-w-md">
              {steps[active].description}
            </p>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="
                w-12 h-12 rounded-full
                border border-green-700
                flex items-center justify-center
                hover:bg-green-100 cursor-pointer
              "
              >
                ←
              </button>

              <button
                onClick={next}
                className="
                w-12 h-12 rounded-full
                bg-green-700 text-white
                flex items-center justify-center
                hover:bg-green-800 cursor-pointer
              "
              >
                →
              </button>

              {/* INDICATOR */}
              <span className="ml-4 text-sm text-green-700">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/*  RIGHT IMAGE  */}
          <div className="relative h-[420px]">
            {steps.map((step, index) => (
              <img
                key={index}
                src={step.image}
                alt={step.title}
                className={`
                absolute inset-0
                w-full h-full object-cover
                rounded-3xl
                transition-all duration-700 ease-out
                ${
                  index === active
                    ? "opacity-100 scale-100 z-20"
                    : "opacity-0 scale-95 z-10"
                }
              `}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
