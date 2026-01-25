import Head from "next/head";

import HeroSection from "@/components/sections/HeroSection";
import JadwalSection from "@/components/sections/JadwalSection";
import TutorSection from "@/components/sections/TutorSection";
import KategoriSampahSection from "@/components/sections/KategoriSampahSection";
import FAQSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Urai • Bank Sampah Kelurahan Pekayon</title>
        <meta
          name="description"
          content="URAI - Bank Sampah Kelurahan Pekayon. Program lingkungan untuk pengelolaan sampah yang modern dan berkelanjutan."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

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
