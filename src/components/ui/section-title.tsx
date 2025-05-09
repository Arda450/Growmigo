type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle({
  title,
  className = "text-2xl font-bold my-6 text-center ",
}: SectionTitleProps) {
  return <h2 className={className}>{title}</h2>;
}
