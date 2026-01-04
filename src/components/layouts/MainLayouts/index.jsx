import { useState } from "react";
import Navbar from "@/components/fragments/Navbar";
import SideMenu from "../SideMenu";
import Footer from "@/components/fragments/Footer";
import ChatWidget from "@/components/ui/Chatbot/ChatbotWidget";

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <ChatWidget />
      <Footer />
    </>
  );
}
