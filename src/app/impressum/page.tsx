import SectionTitle from "@/components/ui/section-title";

export default function Impressum() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl bg-white">
      <SectionTitle title="Impressum" />

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Angaben zum Unternehmen</h2>
        <p className="mb-1">Growmigo GmbH</p>
        <p className="mb-1">Buckhauserstrasse 24</p>
        <p className="mb-1">8048 Zürich</p>
        <p className="mb-1">Schweiz</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Kontakt</h2>
        <p className="mb-1">Telefon: +41 44 123 45 67</p>
        <p className="mb-1">E-Mail: growmigosae@gmail.com</p>
        <p className="mb-1">Website: www.growmigo.ch</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Geschäftsführung</h2>
        <p className="mb-1">Geschäftsführer: Leandro Oswald</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Handelsregistereintrag</h2>
        <p className="mb-1">Eintragung im Handelsregister des Kantons Zürich</p>
        <p className="mb-1">CHE-123.456.789</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">
          Unternehmens-Identifikationsnummer
        </h2>
        <p className="mb-1">UID: CHE-123.456.789</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Mehrwertsteuer</h2>
        <p className="mb-1">Mehrwertsteuernummer: CHE-123.456.789 MWST</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">
          Verantwortlich für den Inhalt
        </h2>
        <p className="mb-1">Leandro Oswald</p>
        <p className="mb-1">Buckhauserstrasse 24</p>
        <p className="mb-1">8048 Zürich</p>
        <p className="mb-1">Schweiz</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">Aufsichtsbehörde</h2>
        <p className="mb-1">
          Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)
        </p>
        <p className="mb-1">Feldeggweg 1</p>
        <p className="mb-1">3003 Bern</p>
        <p className="mb-1">Schweiz</p>
      </section>

      <section>
        <h2 className="text-md font-semibold mb-2">Online-Streitbeilegung</h2>
        <p className="mb-2">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-blue-600 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mb-2">
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
}
