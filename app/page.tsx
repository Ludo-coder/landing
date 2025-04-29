import ClientSection from "@/components/ClientSection/ClientSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex-1">
        <HeroSection />
        <ClientSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
