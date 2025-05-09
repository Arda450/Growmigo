import SectionTitle from "../ui/section-title";
import Image from "next/image";

const tippsList = [
  {
    id: 1,
    title: "Die richtige Bewässerung",
    image: "/images/plantpic.webp",
    content:
      "Giesse deine Pflanzen regelmässig, aber achte darauf, sie nicht zu ertränken. Die meisten Zimmerpflanzen bevorzugen es, wenn die obere Erdschicht zwischen den Wassergaben leicht antrocknet. Verwende immer zimmerwarmem Wasser und achte auf gute Drainage.",
  },
  {
    id: 2,
    title: "Optimales Licht finden",
    image: "/images/plantpic.webp",
    content:
      "Beobachte das Licht in deinem Zuhause und platziere deine Pflanzen entsprechend ihrer Bedürfnisse. Pflanzen mit bunten Blättern benötigen oft mehr Licht, während Grünpflanzen auch mit weniger Licht auskommen können. Vermeide direkte Sonneneinstrahlung für empfindliche Arten.",
  },
  {
    id: 3,
    title: "Richtige Düngung",
    image: "/images/plantpic.webp",
    content:
      "Während der Wachstumsphase im Frühling und Sommer solltest du deine Pflanzen alle 2-4 Wochen düngen. Im Winter benötigen die meisten Pflanzen weniger oder gar keinen Dünger. Verwende lieber einen schwächeren Dünger öfter als einen starken selten.",
  },
  {
    id: 4,
    title: "Auf Schädlinge achten",
    image: "/images/plantpic.webp",
    content:
      "Prüfe regelmässig die Unter- und Oberseite der Blätter auf Schädlinge. Zu den häufigsten Schädlingen gehören Spinnmilben, Blattläuse und Thripse. Behandle befallene Pflanzen sofort und halte sie von anderen Pflanzen getrennt, um eine Ausbreitung zu verhindern.",
  },
  {
    id: 5,
    title: "Richtiges Umtopfen",
    image: "/images/plantpic.webp",
    content:
      "Topfe deine Pflanzen um, wenn die Wurzeln aus den Abflusslöchern wachsen oder die Pflanze nicht mehr wächst. Der neue Topf sollte nur etwa 2-3 cm grösser im Durchmesser sein. Verwende frische, qualitativ hochwertige Erde und topfe am besten im Frühjahr um.",
  },
  {
    id: 6,
    title: "Luftfeuchtigkeit erhöhen",
    image: "/images/plantpic.webp",
    content:
      "Viele Zimmerpflanzen stammen aus tropischen Regionen und lieben eine hohe Luftfeuchtigkeit. Stelle einen Luftbefeuchter auf, gruppiere deine Pflanzen oder stelle sie auf Schalen mit Wasser und Kieselsteinen, um die Luftfeuchtigkeit zu erhöhen.",
  },
];

export default function TippsSection() {
  return (
    <section id="tipps" className="py-14 px-6 max-w-7xl mx-auto">
      <SectionTitle title="Pflegetipps für deine Pflanzen" />

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Hier findest du hilfreiche Tipps, um deine Growmigo-Pflanzen und deine
        echten Zimmerpflanzen gesund und glücklich zu halten. Mit der richtigen
        Pflege werden deine grünen Freunde gedeihen!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tippsList.map((tipp) => (
          <div
            key={tipp.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
              <h3 className="font-bold text-xl mb-3 text-green-700">
                {tipp.title}
              </h3>
              <p className="text-gray-600">{tipp.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
