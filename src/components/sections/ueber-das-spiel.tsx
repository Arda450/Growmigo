import SectionTitle from "../ui/section-title";
import AnimatedButton from "../ui/animated-button";
import Image from "next/image";

export default function UeberDasSpiel() {
  return (
    <section
      id="ueber-das-spiel"
      className="flex flex-col px-4 lg:px-10 mx-auto font-bold pb-12"
    >
      <SectionTitle title="Über das Spiel" />

      <div className="max-w-7xl mx-auto text-lg">
        <p>
          Willkommen bei Growmigo – deine Pflanze braucht dich! Mit Growmigo
          pflegst du eine echte Pflanze – und begleitest sie in der App. Du
          giesst, schaust nach ihr, hilfst ihr beim Wachsen und lernst ganz
          nebenbei, was Pflanzen brauchen, um stark und gesund zu werden.
        </p>

        <p>
          Ob Tomate, Minze oder Erdbeere – jede Pflanze reagiert auf deine
          Pflege. In der App zeigt sie dir, wie es ihr geht: Ist sie glücklich,
          durstig oder braucht sie Hilfe? Wenn du gut auf sie achtest, wirst du
          mit frischem Wachstum – und sogar einer kleinen Ernte – belohnt!
        </p>

        <p className="mb-10">
          Growmigo macht Spass und zeigt dir, wie schön es ist, Verantwortung zu
          übernehmen – Tag für Tag.
        </p>

        <div className="">
          <div className="flex flex-col gap-4">
            <p>
              Teste Growmigo 30 Tage kostenlos. Hol dir das Starterkit für noch
              mehr Pflanzenspass – oder leg direkt los im App Store!
            </p>

            <p>Jetzt downloaden und dein Pflanzenabenteuer starten.</p>
          </div>

          {/* Button und Maskottchen nebeneinander */}
          <div className="my-6 flex flex-row items-end sm:items-center justify-between gap-6">
            <div className="flex-shrink-0">
              <AnimatedButton
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-thin text-base sm:text-lg md:text-xl"
              >
                Jetzt herunterladen
              </AnimatedButton>
            </div>

            {/* maskottchen rechts */}
            <div className="flex-shrink-0">
              <Image
                src="/images/ueber-das-spiel/growmigo-mascot.png"
                alt="Growmigo Maskottchen"
                width={150}
                height={150}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
