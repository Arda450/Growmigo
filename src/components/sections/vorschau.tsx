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
import SectionTitle from "../ui/section-title";
import { useEffect, useState } from "react";

const vorschauItems = [
  {
    id: 1,
    image: "/images/vorschau/vorschau1.png",
    alt: "Pflege deine Pflanzen",
    title: "Pflege deine Pflanzen",
  },
  {
    id: 2,
    image: "/images/vorschau/vorschau2.png",
    alt: "Sammle Belohnungen",
    title: "Sammle Belohnungen",
  },
  {
    id: 3,
    image: "/images/vorschau/vorschau3.png",
    alt: "Entdecke neue Arten",
    title: "Entdecke neue Arten",
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

      <div className="max-w-[95%] md:max-w-2xl lg:max-w-3xl mx-auto px-2 w-[450px]:px-6 md:px-2">
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
                      className="object-cover scale-300 object-center"
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
          <div className="w-full">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                title="Growmigo Gameplay Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3 text-center">
              Gameplay Video
            </h3>
            <p className="text-sm text-gray-600 text-center mt-1">
              Entdecke wie Growmigo funktioniert
            </p>
          </div>
          <div className="w-full">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                title="Growmigo Tutorial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3 text-center">
              Tutorial Video
            </h3>
            <p className="text-sm text-gray-600 text-center mt-1">
              Lerne die Grundlagen der Pflanzenpflege
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vorschau;
