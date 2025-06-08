import SectionTitle from "../ui/section-title";
import AnimatedButton from "../ui/animated-button";

export default function UeberDasSpiel() {
  return (
    <section
      id="ueber-das-spiel"
      className="flex flex-col space-y-4 px-4 lg:px-10 mx-auto font-bold"
    >
      <SectionTitle title="Über das Spiel" />

      <div className="max-w-7xl mx-auto text-gray-600">
        <p>
          Willkommen bei Growmigo – dem entspannten Spiel, in dem du liebevoll
          deine eigenen virtuellen Pflanzen pflegst. Ob kleine Sukkulente, bunte
          Blume oder exotischer Farn – jede Pflanze braucht deine
          Aufmerksamkeit, um zu wachsen und zu gedeihen.
        </p>

        <p>
          Giesse regelmässig, halte die Blätter gesund, entdecke neue
          Pflanzenarten und sammle Belohnungen für gute Pflege. Je besser du
          dich um deine grünen Freunde kümmerst, desto schöner blühen sie auf!
        </p>

        <p className="mb-10">
          Perfekt für zwischendurch – ohne Stress, aber mit ganz viel Herz.
        </p>

        <p>
          Lade Growmigo jetzt herunter und starte dein eigenes kleines
          Pflanzenparadies. Ganz ohne grünen Daumen – aber mit ganz viel Liebe.
        </p>

        <p>Einfach klicken und kostenlos downloaden!</p>

        <div className="my-6 flex flex-col sm:flex-row gap-4">
          <AnimatedButton
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt herunterladen
          </AnimatedButton>
          {/* <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-md sm:text-lg py-3 sm:py-3 px-6 sm:px-6 sm:rounded-xl rounded-lg flex items-center justify-center transition-colors duration-200 w-fit mx-auto sm:mx-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="whitespace-nowrap">Jetzt herunterladen</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
