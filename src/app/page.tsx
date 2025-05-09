import HeroSection from "@/components/sections/hero-section";
import UeberDasSpiel from "@/components/sections/ueber-das-spiel";
import Vorschau from "@/components/sections/vorschau";
import Projekt from "@/components/sections/projekt";
import ContactForm from "@/components/sections/contact-form";
export default function Home() {
  return (
    <div className="relative overflow-hidden w-full">
      <HeroSection />

      <UeberDasSpiel />

      <Vorschau />

      <Projekt />

      <ContactForm />
    </div>
  );
}
