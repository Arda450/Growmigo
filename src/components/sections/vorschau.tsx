import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import YouTubeVideo from "@/components/ui/youtube-video";
import SectionTitle from "../ui/section-title";

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
    alt: "Entdecke mehr Arten ma babyyyyy",
    title: "Entdecke mehr Arten ma babyyyyy",
  },
];

export default function Vorschau() {
  return (
    <section id="vorschau" className="py-10 px-6 bg-slate-300/50">
      <SectionTitle title="Vorschau des Spiels" />

      <div className=" max-w-[85%] md:max-w-2xl lg:max-w-3xl mx-auto px-2 border border-red-500 ">
        <Carousel className="w-full">
          <CarouselContent>
            {/* Erstes Bild */}
            {vorschauItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
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
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <SectionTitle title="So funktioniert Growmigo" />

      {/* Video-Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <YouTubeVideo videoId="dQw4w9WgXcQ" title="Schnellstart-Tutorial" />
          <YouTubeVideo videoId="BWtBckf8RIw" title="Tipps für Anfänger" />
        </div>
      </div>
    </section>
  );
}
