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
  {
    id: 7,
    title: "Richtige Temperatur",
    image: "/images/plantpic.webp",
    content:
      "Die meisten Zimmerpflanzen fühlen sich bei 18-24°C am wohlsten. Vermeide extreme Temperaturschwankungen und stelle Pflanzen nicht direkt neben Heizkörper oder Klimaanlagen. Nachts darf es etwas kühler sein - das fördert sogar das Wachstum vieler Arten.",
  },
  {
    id: 8,
    title: "Blätter regelmässig reinigen",
    image: "/images/plantpic.webp",
    content:
      "Staub blockiert die Poren der Blätter und hindert die Photosynthese. Wische die Blätter wöchentlich mit einem feuchten Tuch ab oder dusche sie sanft ab. Bei behaarten Blättern verwende einen weichen Pinsel. Saubere Blätter sehen nicht nur schöner aus, sondern sind auch gesünder.",
  },
  {
    id: 9,
    title: "Winterpflege beachten",
    image: "/images/plantpic.webp",
    content:
      "Im Winter brauchen Pflanzen weniger Wasser und Dünger, da sie langsamer wachsen. Reduziere die Wassergaben und stelle sie an hellere Plätze, da die Tage kürzer sind. Viele Pflanzen benötigen eine Ruhephase - das ist völlig normal und wichtig für ihre Gesundheit.",
  },
  {
    id: 10,
    title: "Früherkennung von Problemen",
    image: "/images/plantpic.webp",
    content:
      "Gelbe Blätter können Überwässerung bedeuten, braune Spitzen deuten auf niedrige Luftfeuchtigkeit hin. Hängende Blätter signalisieren meist Wassermangel. Lerne die Signale deiner Pflanzen zu verstehen - sie zeigen dir, was sie brauchen.",
  },
  {
    id: 11,
    title: "Richtige Erde wählen",
    image: "/images/plantpic.webp",
    content:
      "Verwende qualitativ hochwertige Blumenerde mit guter Drainage. Sukkulenten und Kakteen benötigen spezielle Kakteenerde, während tropische Pflanzen nährstoffreiche, feuchtigkeitsspeichernde Erde bevorzugen. Mische bei Bedarf Perlite oder Sand unter für bessere Drainage.",
  },
  {
    id: 12,
    title: "Pflanzen vermehren",
    image: "/images/plantpic.webp",
    content:
      "Viele Zimmerpflanzen lassen sich leicht durch Stecklinge vermehren. Schneide gesunde Triebe ab, stelle sie in Wasser bis Wurzeln wachsen, dann topfe sie ein. So kannst du deine Pflanzensammlung erweitern oder Freunden eine Freude machen.",
  },
];

export default function TippsSection() {
  return (
    <section id="tipps" className="py-20 px-6 max-w-7xl mx-auto">
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
