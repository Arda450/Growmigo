"use client";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  isLoading: boolean;
  className?: string;
  loadingText?: string;
  text?: string;
};

export default function SubmitButton({
  isLoading,
  className = "w-auto px-8 py-2 mx-auto",
  loadingText = "Senden...",
  text = "Senden",
}: SubmitButtonProps) {
  return (
    <Button disabled={isLoading} className={className}>
      {isLoading ? loadingText : text}
    </Button>
  );
}
