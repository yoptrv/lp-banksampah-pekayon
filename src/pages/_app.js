import "@/styles/globals.css";
import MainLayout from "@/components/layouts/MainLayouts";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
