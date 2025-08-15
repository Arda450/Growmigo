"use client";

import Image from "next/image";
import SectionTitle from "../ui/section-title";
import { useEffect, useState } from "react";
import YoutubeLazy from "../ui/youtube-lazy";
import dynamic from "next/dynamic";
import type { CarouselApi } from "@/components/ui/carousel";

// Lazy load Carousel components
const Carousel = dynamic(
  () =>
    import("@/components/ui/carousel").then((mod) => ({
      default: mod.Carousel,
    })),
  {
    ssr: false, // disable server side rendering
    loading: () => (
      <div className="h-80 bg-gray-100 rounded-lg animate-pulse"></div>
    ),
  }
);

const CarouselContent = dynamic(() =>
  import("@/components/ui/carousel").then((mod) => ({
    default: mod.CarouselContent,
  }))
);
const CarouselItem = dynamic(() =>
  import("@/components/ui/carousel").then((mod) => ({
    default: mod.CarouselItem,
  }))
);
const CarouselNext = dynamic(() =>
  import("@/components/ui/carousel").then((mod) => ({
    default: mod.CarouselNext,
  }))
);
const CarouselPrevious = dynamic(() =>
  import("@/components/ui/carousel").then((mod) => ({
    default: mod.CarouselPrevious,
  }))
);

const vorschauItems = [
  {
    id: 1,
    image: "/images/vorschau/growmigo6.webp",
    alt: "Growmigo Startbildschirm mit Pflanzentöpfen und Benutzeroberfläche",
    title: "Willkommen bei Growmigo",
  },
  {
    id: 2,
    image: "/images/vorschau/growmigo2.webp",
    alt: "Spieler pflegt virtuelle Pflanze durch Giessen und Düngen",
    title: "Pflege deine Pflanzen",
  },
  {
    id: 3,
    image: "/images/vorschau/growmigo3.webp",
    alt: "Belohnungssystem mit Punkten und Achievements für Pflanzenpflege",
    title: "Sammle Belohnungen",
  },
  {
    id: 4,
    image: "/images/vorschau/growmigo4.webp",
    alt: "Verschiedene Pflanzenarten und -sorten im Spiel entdecken",
    title: "Entdecke neue Arten",
  },
  {
    id: 5,
    image: "/images/vorschau/growmigo5.webp",
    alt: "Lernmodus mit Tipps und Informationen zur Pflanzenpflege",
    title: "Lerne Pflanzenpflege",
  },
  {
    id: 6,
    image: "/images/vorschau/growmigo1.webp",
    alt: "Fortschrittsanzeige und Statistiken des Pflanzenwachstums",
    title: "Verfolge dein Wachstum",
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
    <section id="vorschau" className="font-bold pb-12">
      <SectionTitle title="Vorschau des Spiels" />
      {/* Container-Größe für Hochformat-Bilder anpassen */}
      <div className="max-w-[95%] md:max-w-3xl lg:max-w-4xl mx-auto px-2 md:px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {vorschauItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[280px] md:basis-[320px]"
              >
                <div className="p-2 h-full">
                  <div
                    className="relative w-full rounded-lg overflow-hidden border-2 border-[#909d7b]"
                    style={{ aspectRatio: "9/16" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:768px) 320px, 280px"
                      loading="lazy"
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

          <div className="flex flex-col items-center lg:hidden">
            {current} / {count}
            <div className="bg-[#909d7b] w-12 inline-flex p-1 rounded-md"></div>
          </div>
        </Carousel>
      </div>
      <SectionTitle title="So funktioniert Growmigo" />
      {/* Video-Section */}
      <div className="max-w-4xl px-4 py-6 lg:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <YoutubeLazy
            videoId="PR8WOmkSxUA"
            title="Growmigo Gameplay"
            description="Entdecke wie Growmigo funktioniert"
          />
          <YoutubeLazy
            videoId="qb4gIVXHtRw"
            title="Tutorial Video"
            description="Lerne die Grundlagen der Pflanzenpflege"
          />
        </div>
      </div>
    </section>
  );
};

export default Vorschau;
