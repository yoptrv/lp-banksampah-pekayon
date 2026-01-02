import Navbar from "@/components/fragments/Navbar";
import Footer from "@/components/fragments/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
