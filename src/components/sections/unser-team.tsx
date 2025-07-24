import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../ui/section-title";

const TeamMitglieder = [
  {
    id: 1,
    title: "Sabrina Lichtsteiner",
    branche: "Marketing & Social Media",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Sabrina Lichtsteiner",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 2,
    title: "Diamond Ocran",
    branche: "Games Programmer",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Diamond Ocran",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 3,
    title: "Andrew Roth",
    branche: "Games Artist",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Andrew Roth",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 4,
    title: "Philippe Weber",
    branche: "Marketing & Filmmaking",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Philippe Weber",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 5,
    title: "Leandro Oswald",
    branche: "Games Programmer",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Leandro Oswald",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 6,
    title: "Arda Karadavut",
    branche: "Webentwickler",
    image: "/images/plantpic.webp",
    alt: "Beschreibung des Teammitglieds Arda Karadavut",
    description:
      "Webentwickler-Student an der SAE Zürich mit Spezialisierung auf moderne Frontend- und Backend-Technologien. Arda hat die Growmigo-Website von Grund auf mit Next.js und Tailwind CSS entwickelt. Seine fundierte Expertise in Fullstack-Entwicklung bildet das technische Fundament für unsere digitale Plattform.",
  },
];

export default function UnserTeam() {
  return (
    <section id="unser-team" className="w-full py-20 px-6">
      <SectionTitle title="Unser Team" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {TeamMitglieder.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-center ${
                index % 2 === 1 ? "md:mt-20" : ""
              }`}
            >
              <Card className="w-[300px] border-0 shadow-md overflow-hidden bg-[#909d7b] flex flex-col">
                <div className="relative h-[250px] w-full flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-col items-center gap-1 text-white text-xl">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-white">
                      {item.branche}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 text-center">
                  <p className="text-white leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
