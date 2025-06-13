"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import YouTubeVideo from "@/components/ui/youtube-video";
import SectionTitle from "../ui/section-title";
import { useEffect, useState } from "react";

const vorschauItems = [
  {
    id: 1,
    image: "/images/plantpic.webp",
    alt: "Pflege deine Pflanzen",
    title: "Pflege deine Pflanzen",
  },
  {
    id: 2,
    image: "/images/plantpic.webp",
    alt: "Sammle Belohnungen",
    title: "Sammle Belohnungen",
  },
  {
    id: 3,
    image: "/images/plantpic.webp",
    alt: "Entdecke neue Arten",
    title: "Entdecke neue Arten",
  },
  {
    id: 4,
    image: "/images/plantpic.webp",
    alt: "Entdecke mehr Artennn",
    title: "Entdecke mehr Artennn",
  },
];

const Vorschau = () => {
  // useState hooks für die carousel api
  const [api, setApi] = useState<CarouselApi>(); // api speichert die carousel api referenz
  const [current, setCurrent] = useState(0); // aktueller slide
  const [count, setCount] = useState(0); // gesamtanzahl der slides

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length); // gesamtanzahl der slides
    setCurrent(api.selectedScrollSnap() + 1); // aktueller slide, +1 weil es 0-basiert ist

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1); // aktueller slide, +1 weil es 0-basiert ist
    });
  }, [api]);

  return (
    <section id="vorschau" className="bg-slate-300/50">
      <SectionTitle title="Vorschau des Spiels" />

      <div className=" max-w-[95%] md:max-w-2xl lg:max-w-3xl mx-auto px-2 w-[450px]:px-6 md:px-2">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {/* Erstes Bild */}
            {vorschauItems.map((item) => (
              <CarouselItem key={item.id} className="basis-[300px]">
                <div className="p-2 h-full">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium text-center">{item.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-4">
            <CarouselPrevious className="border-[#909d7b ] text-[#909d7b] hover:bg-[#909d7b] mr-2" />
            <CarouselNext className="border-[#909d7b] text-[#909d7b] hover:bg-[#909d7b]" />
          </div>

          <div className="flex justify-center lg:hidden">
            <div className="bg-[#909d7b] text-white inline-flex p-2 text-center text-sm font-bold rounded-xl">
              {current} / {count}
            </div>
          </div>
        </Carousel>
      </div>

      <SectionTitle title="So funktioniert Growmigo" />

      {/* Video-Section */}
      <div className="max-w-4xl px-4 py-6 lg:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="w-full">
            <YouTubeVideo videoId="dQw4w9WgXcQ" title="Schnellstart-Tutorial" />
          </div>
          <div className="w-full">
            <YouTubeVideo videoId="BWtBckf8RIw" title="Tipps für Anfänger" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vorschau;
