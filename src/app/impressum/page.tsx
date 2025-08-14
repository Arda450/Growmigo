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
        <h2 className="text-md font-semibold mb-2">Ansprechpartner</h2>
        <p className="mb-1">Sabrina Lichtsteiner</p>
        <p className="mb-1">E-Mail: growmigosae@gmail.com</p>
      </section>

      <section className="mb-4">
        <h2 className="text-md font-semibold mb-2">
          Verantwortlich für den Inhalt
        </h2>
        <p className="mb-1">Arda Karadavut</p>
        <p className="mb-1">arda.karadavut@protonmail.com</p>
      </section>
    </div>
  );
}
