import Image from "next/image";
import AnimatedButton from "../ui/animated-button";

export default function HeroSection() {
  return (
    <>
      <section id="hero" className="relative w-full overflow-hidden">
        {/* Hintergrundbild über die gesamte Breite und beginnt am oberen Rand der Seite */}
        <div className="absolute top-0 inset-x-0 w-full h-[600px] -z-10">
          <Image
            src="/images/hero-section/hero-section.jpg"
            alt="Hero Image"
            fill
            className="object-cover scale-150 sm:scale-130 md:scale-100 object-center"
            priority
          />
          {/*Dunkler Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0"></div>
        </div>

        <div className="h-[600px] max-w-7xl mx-auto flex flex-col justify-center"></div>

        {/* Slogan Section als Overlay am unteren Rand des Hero-Bereichs */}
        <div className="absolute bottom-0 left-0 right-0 w-full py-6 md:py-8 lg:py-12 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <AnimatedButton href="#projekt">ERKUNDEN</AnimatedButton>
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                  Die App, die mitwächst. Pflanzenpflege zum Spielen, Lernen und
                  Staunen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
