interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({
  title,
  className = "text-lg font-more-sugar py-8 sm:text-2xl md:text-3xl text-center px-4 tracking-wide",
}: SectionTitleProps) {
  return <h2 className={className}>{title}</h2>;
}
