import Image from "next/image";
import AnimatedButton from "../ui/animated-button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Hintergrundbild über die gesamte Breite und beginnt am oberen Rand der Seite */}
      <div className="absolute top-0 inset-x-0 w-full h-[400px] -z-10">
        <Image
          src="/images/plantpic.webp"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        {/*Dunkler Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="h-[400px] max-w-7xl  mx-auto flex flex-col justify-end border border-blue-500">
        <div className="flex flex-col gap-4 px-4 md:py-8 mb-6 max-w-7xl mx-auto w-full">
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Growmigo
          </h1> */}
          <p className="text-lg md:text-2xl text-white mb-6">
            Erkunde, pflanze, wachse - dein botanisches Abenteuer beginnt jetzt.
          </p>

          <div className="mt-2">
            <AnimatedButton href="#projekt">ERKUNDEN</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
