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
    image: "/images/mitglieder/sabrina-lichtsteiner.jpg",
    alt: "Beschreibung des Teammitglieds Sabrina Lichtsteiner",
    description:
      "Sabrina studiert Marketing & Social Media und war für die schriftlichen Abgaben sowie die Vorbereitung der Präsentationen verantwortlich. Sie entwickelte unseren Social‑Media‑Auftritt (Content‑Strategie, Redaktionsplan, Tonalität und Visuals) und stellte sicher, dass unsere Botschaften klar, zielgruppengerecht und konsistent kommuniziert werden.",
  },
  {
    id: 2,
    title: "Diamond Ocran",
    branche: "Games Programmer",
    image: "/images/mitglieder/diamond-ocran.jpg",
    alt: "Beschreibung des Teammitglieds Diamond Ocran",
    description:
      "Diamond ist Games‑Programmer und entwickelte gemeinsam mit Leandro das Spiel. Er implementierte Kern‑Gameplay‑Logik und Systeme in Unity/C#, optimierte die Performance und führte Prototypen bis zum spielbaren Stand. Zusätzlich kümmerte er sich um UI‑/Feedback‑Integration und saubere, erweiterbare Code‑Strukturen.",
  },
  {
    id: 3,
    title: "Andrew Roth",
    branche: "Games Artist",
    image: "/images/ueber-das-spiel/growmigo-mascot.png",
    alt: "Beschreibung des Teammitglieds Andrew Roth",
    description:
      "Andrew ist 3D Game Artist und verantwortete die kreativen Inhalte seines Fachbereichs, einschliesslich der kinderfreundlichen Gestaltung. Er entwickelte die 3D-Assets von der Idee bis zur finalen Umsetzung mit Tools wie Blender, Substance Painter, Photoshop, Unity und KI-Anwendungen.",
  },
  {
    id: 4,
    title: "Philippe Weber",
    branche: "Marketing & Filmmaking",
    image: "/images/mitglieder/philippe-weber.jpg",
    alt: "Beschreibung des Teammitglieds Philippe Weber",
    description:
      "Philippe studiert Film/Video und war neben den schriftlichen Abgaben für die Konzeption und Produktion der Marketing‑Videos zuständig.",
  },
  {
    id: 5,
    title: "Leandro Oswald",
    branche: "Games Programmer",
    image: "/images/mitglieder/leandro-oswald.jpg",
    alt: "Beschreibung des Teammitglieds Leandro Oswald",
    description:
      "Leandro ist Games-Programming-Student an der SAE Zürich und spezialisiert auf die Entwicklung mit Unity und Unreal Engine. Mit Erfahrung in C#, C++, und Blueprints bringt er technisches Know-how in die App-Entwicklung ein.",
  },
  {
    id: 6,
    title: "Arda Karadavut",
    branche: "Webentwickler",
    image: "/images/mitglieder/arda-karadavut.jpg",
    alt: "Beschreibung des Teammitglieds Arda Karadavut",
    description:
      "Webentwickler-Student an der SAE Zürich mit Spezialisierung auf moderne Frontend- und Backend-Technologien. Arda hat die Growmigo-Website von Grund auf mit Next.js und Tailwind CSS entwickelt.",
  },
];

export default function UnserTeam() {
  return (
    <section id="unser-team" className="w-full py-12">
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
                <div className="relative h-[300px] w-full flex-shrink-0">
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
