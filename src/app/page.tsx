import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import OrbitStats from "@/components/home/OrbitStats";
import FeaturedApps from "@/components/home/FeaturedApps";
import Logbook from "@/components/home/Logbook";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <OrbitStats />
      <FeaturedApps />
      <Logbook />
      <AboutSection />
      <ContactSection />
    </>
  );
}
