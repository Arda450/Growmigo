import SectionTitle from "../ui/section-title";
import Image from "next/image";

const tippsList = [
  {
    id: 1,
    title: "Richtig giessen",
    image: "/images/plantpic.webp",
    content:
      "Deine Pflanzen brauchen Wasser, aber nicht zu viel! Fühle mit dem Finger in die Erde - ist sie trocken, dann gib Wasser dazu. Zu viel Wasser macht die Wurzeln kaputt. Verwende warmes Wasser, das ist am besten für deine grünen Freunde.",
  },
  {
    id: 2,
    title: "Das perfekte Licht",
    image: "/images/plantpic.webp",
    content:
      "Pflanzen sind wie Menschen - sie brauchen Licht zum Leben! Stelle deine Pflanzen an ein helles Fenster, aber nicht direkt in die pralle Sonne. Bunte Blätter brauchen mehr Licht, grüne Blätter kommen auch mit weniger Licht zurecht.",
  },
  {
    id: 3,
    title: "Pflanzen-Futter geben",
    image: "/images/plantpic.webp",
    content:
      "Im Frühling und Sommer haben deine Pflanzen Hunger! Gib ihnen alle 2-4 Wochen ein bisschen Pflanzenfutter (Dünger). Im Winter brauchen sie weniger oder gar kein Futter. Lieber wenig und öfter als viel auf einmal.",
  },
  {
    id: 4,
    title: "Kleine Tierchen entdecken",
    image: "/images/plantpic.webp",
    content:
      "Manchmal kommen winzige Käfer oder Spinnen auf deine Pflanzen. Schaue regelmässig unter die Blätter - entdeckst du kleine Tierchen? Dann musst du sie schnell behandeln und die Pflanze von anderen trennen, damit sie sich nicht ausbreiten.",
  },
  {
    id: 5,
    title: "Ein neues Zuhause geben",
    image: "/images/plantpic.webp",
    content:
      "Wird deine Pflanze zu gross für ihren Topf? Dann braucht sie ein neues Zuhause! Nimm einen Topf, der nur ein bisschen grösser ist. Verwende frische Erde und mache das am besten im Frühling, wenn die Pflanzen wieder wachsen wollen.",
  },
  {
    id: 6,
    title: "Feuchte Luft schaffen",
    image: "/images/plantpic.webp",
    content:
      "Pflanzen mögen feuchte Luft, genau wie im Regenwald! Du kannst eine Schale mit Wasser neben deine Pflanzen stellen oder sie zusammen gruppieren. So fühlen sie sich richtig wohl und wachsen besser.",
  },
  {
    id: 7,
    title: "Die richtige Temperatur",
    image: "/images/plantpic.webp",
    content:
      "Pflanzen mögen es nicht zu heiss und nicht zu kalt - genau wie du! 18-24°C ist perfekt. Stelle sie nicht direkt neben die Heizung oder Klimaanlage. Nachts darf es etwas kühler sein - das ist sogar gut für sie!",
  },
  {
    id: 8,
    title: "Blätter sauber machen",
    image: "/images/plantpic.webp",
    content:
      "Staubige Blätter können nicht richtig atmen! Wische sie einmal pro Woche mit einem feuchten Tuch ab oder dusche sie sanft ab. Bei flauschigen Blättern verwende einen weichen Pinsel. Saubere Blätter sind glückliche Blätter!",
  },
  {
    id: 9,
    title: "Winter-Pflege",
    image: "/images/plantpic.webp",
    content:
      "Im Winter schlafen deine Pflanzen fast - genau wie Bären! Sie brauchen weniger Wasser und kein Futter. Stelle sie an hellere Plätze, weil die Tage kürzer sind. Keine Sorge, wenn sie langsamer wachsen - das ist normal!",
  },
  {
    id: 10,
    title: "Hilfe-Signale verstehen",
    image: "/images/plantpic.webp",
    content:
      "Deine Pflanzen sprechen mit dir! Gelbe Blätter sagen &apos;zu viel Wasser&apos;, braune Spitzen bedeuten &apos;ich brauche mehr feuchte Luft&apos;, hängende Blätter rufen &apos;Durst!&apos;. Lerne ihre Sprache und sie werden dir zeigen, was sie brauchen.",
  },
  {
    id: 11,
    title: "Die beste Erde aussuchen",
    image: "/images/plantpic.webp",
    content:
      "Gute Erde ist wie ein gemütliches Bett für deine Pflanzen! Kaufe gute Blumenerde im Geschäft. Kakteen brauchen spezielle Kakteen-Erde, andere Pflanzen mögen normale Blumenerde. Gute Erde hilft beim Wachsen!",
  },
  {
    id: 12,
    title: "Neue Pflanzen züchten",
    image: "/images/plantpic.webp",
    content:
      "Du kannst aus einer Pflanze viele machen! Schneide einen gesunden Ast ab, stelle ihn in Wasser bis kleine Wurzeln wachsen, dann pflanze ihn in einen Topf. So kannst du Freunden oder Familie neue Pflanzen schenken!",
  },
];

export default function TippsSection() {
  return (
    <section id="tipps" className="px-6 max-w-7xl mx-auto pb-12">
      <SectionTitle title="Wie du deine Pflanzen glücklich machst" />

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
        Hier lernst du, wie du deine Growmigo-Pflanzen und deine echten
        Zimmerpflanzen richtig pflegst! Mit diesen einfachen Tipps werden deine
        grünen Freunde gross und stark. Los geht&apos;s!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tippsList.map((tipp) => (
          <div
            key={tipp.id}
            className="bg-[#909d7b] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={tipp.image}
                alt={tipp.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-xl mb-3 text-white">
                {tipp.title}
              </h3>
              <p className="text-sm text-white">{tipp.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
