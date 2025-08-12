import HeroSection from "@/components/sections/hero-section";
import UeberDasSpiel from "@/components/sections/ueber-das-spiel";
import Vorschau from "@/components/sections/vorschau";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components to improve initial page load
const Projekt = dynamic(() => import("@/components/sections/projekt"), {
  ssr: true,
  loading: () => (
    <div className="h-96 flex items-center justify-center">Lädt...</div>
  ),
});

const ContactForm = dynamic(
  () => import("@/components/sections/contact-form"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 flex items-center justify-center">Lädt...</div>
    ),
  }
);

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
