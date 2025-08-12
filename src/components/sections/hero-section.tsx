import Image from "next/image";
import AnimatedButton from "../ui/animated-button";

export default function HeroSection() {
  return (
    <>
      <section id="hero" className="relative w-full overflow-hidden">
        {/* Hintergrundbild über die gesamte Breite und beginnt am oberen Rand der Seite */}
        <div className="absolute top-0 inset-x-0 w-full h-[600px] -z-10">
          <Image
            src="/images/hero-section/pexels-catscoming-421999.jpg"
            alt="Hero Image"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoICChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/*Dunkler Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="h-[600px] max-w-7xl mx-auto flex flex-col justify-center"></div>

        {/* Slogan Section als Overlay am unteren Rand des Hero-Bereichs */}
        <div className="absolute bottom-0 left-0 right-0 md:bg-black/20 md:backdrop-blur-sm py-6 md:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-start gap-6 lg:gap-8">
            <AnimatedButton href="#vorschau">ERKUNDEN</AnimatedButton>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
              Die App, die mitwächst. Pflanzenpflege zum Spielen, Lernen und
              Staunen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
