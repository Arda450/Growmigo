import SectionTitle from "../ui/section-title";

export default function Projekt() {
  return (
    <section
      id="projekt"
      className="flex flex-col mx-auto font-bold bg-[#92a07d] text-white"
    >
      <SectionTitle title="Über unser Projekt" />

      <p className="px-4 lg:px-10 py-6 max-w-7xl mx-auto text-lg">
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
