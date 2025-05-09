export default function Impressum() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-2">Growmigo GmbH</p>
        <p className="mb-2">Musterstraße 123</p>
        <p className="mb-2">12345 Musterstadt</p>
        <p className="mb-2">Deutschland</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
        <p className="mb-2">Telefon: +49 123 456789</p>
        <p className="mb-2">E-Mail: info@growmigo.de</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Vertretungsberechtigte</h2>
        <p className="mb-2">Geschäftsführer: Max Mustermann</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Registereintrag</h2>
        <p className="mb-2">Eintragung im Handelsregister</p>
        <p className="mb-2">Registergericht: Amtsgericht Musterstadt</p>
        <p className="mb-2">Registernummer: HRB 12345</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-2">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </p>
        <p className="mb-2">DE123456789</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p className="mb-2">Max Mustermann</p>
        <p className="mb-2">Musterstraße 123</p>
        <p className="mb-2">12345 Musterstadt</p>
        <p className="mb-2">Deutschland</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
        <p className="mb-4">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-blue-600 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
}
