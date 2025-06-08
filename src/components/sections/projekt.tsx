import SectionTitle from "../ui/section-title";

export default function Projekt() {
  return (
    <section
      id="projekt"
      className="flex flex-col  mx-auto bg-gradient-to-b from-slate-300/50 to-green-200 font-bold"
    >
      <SectionTitle title="Über unser Projekt" />

      <p className="px-4 border border-red-200 max-w-7xl mx-auto text-gray-600">
        Growmigo ist das Ergebnis eines kreativen Gruppenprojekts von sechs
        motivierten Köpfen. Mit dabei sind zwei leidenschaftliche
        Game-Programmierer, ein fantasievoller Game Designer, ein Webentwickler,
        ein Profi aus dem Filmbereich und eine Expertin für Social Media &
        Marketing. Gemeinsam haben wir ein Spiel geschaffen, das Spass macht,
        entspannt – und vielleicht sogar ein kleines Lächeln aufs Gesicht
        zaubert.
      </p>
    </section>
  );
}
