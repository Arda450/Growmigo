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
    title: "Max Mustermann",
    branche: "Programmierer",
    image: "/images/plantpic.webp",
    alt: "Pflege deine Pflanzen",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 2,
    title: "Max Musterfrau",
    branche: "Marketing",
    image: "/images/plantpic.webp",
    alt: "Sammle Belohnungen",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 3,
    title: "Max Musterkind",
    branche: "Design",
    image: "/images/plantpic.webp",
    alt: "Entdecke neue Arten",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 4,
    title: "Max Musterenkel",
    branche: "Marketing",
    image: "/images/plantpic.webp",
    alt: "Entdecke mehr Arten ma babyyyyy",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 5,
    title: "Max Musterurenkel",
    branche: "Webdesign",
    image: "/images/plantpic.webp",
    alt: "Entdecke mehr Arten ma babyyyyy",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    id: 6,
    title: "Max Musterururenkel",
    branche: "Programmierer2",
    image: "/images/plantpic.webp",
    alt: "Entdecke mehr Arten ma babyyyyy",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

export default function UnserTeam() {
  return (
    <section
      id="unser-team"
      className="w-full py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <SectionTitle title="Unser Team" />
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TeamMitglieder.map((item, index) => (
            // index ist der zähler der map func. index fängt von 0 an
            <div
              key={item.id}
              className={`flex justify-center ${
                index % 2 === 1 ? "md:mt-20" : ""
              }`}
            >
              <Card className="h-[500px] w-full max-w-[300px] border-0 shadow-md overflow-hidden">
                <div className="relative h-48 w-full border border-red-400">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-col items-center gap-1 text-green-700 text-xl">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.branche}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 px-5">
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
