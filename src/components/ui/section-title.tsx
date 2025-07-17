interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({
  title,
  className = "text-lg text-left font-more-sugar font-normal py-8 sm:text-2xl md:text-3xl md:text-center px-4 text-[#2C3E50] tracking-wide",
}: SectionTitleProps) {
  return <h2 className={className}>{title}</h2>;
}
