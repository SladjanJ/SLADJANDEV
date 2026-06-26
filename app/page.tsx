import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CarouselSection />
        <ProjectsSection />
        <AboutSection />
        <LeadMagnetSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
