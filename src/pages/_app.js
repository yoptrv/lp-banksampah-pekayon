import "@/styles/globals.css";
import MainLayout from "@/components/layouts/MainLayouts";
import { Plus_Jakarta_Sans } from "next/font/google";

// IMPORT FONT
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={jakarta.variable}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
