type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`mx-12 border-b-6 border-gray-500 rounded-lg my-10 ${className}`}
    />
  );
}
