import HeroSection from "@/components/sections/HeroSection";
import JadwalSection from "@/components/sections/JadwalSection";
import TutorSection from "@/components/sections/TutorSection";  
import KategoriSampahSection from "@/components/sections/KategoriSampahSection";
import FAQSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <JadwalSection />
        <TutorSection />
        <KategoriSampahSection />
        <FAQSection />
      </main>
    </>
  );
}
