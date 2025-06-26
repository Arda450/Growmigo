import Image from "next/image";

interface OpenMojiProps {
  emoji: string;
  size?: number;
  className?: string;
}

const emojiMap: Record<string, string> = {
  apple: "1F34E",
  carrot: "1F955",
  strawberry: "1F353",
  lettuce: "1F96C",
  orange: "1F34A",
  eggplant: "1F346",
  cucumber: "1F952",
  banana: "1F34C",
  broccoli: "1F966",
  tomato: "1F345",
};

export function OpenMoji({ emoji, size = 32, className }: OpenMojiProps) {
  const emojiCode = emojiMap[emoji] || "1F34E";
  const src = `https://cdn.jsdelivr.net/npm/openmoji@15.0.0/color/svg/${emojiCode}.svg`;

  return (
    <Image
      src={src}
      alt={emoji}
      width={size}
      height={size}
      className={className}
    />
  );
}
