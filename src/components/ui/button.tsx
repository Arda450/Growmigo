import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap   rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#FF6B6B] text-white shadow-lg hover:bg-[#FF6B6B]/90 hover:scale-105 transform",
        destructive:
          "bg-[#FF9F9F] text-white shadow-lg hover:bg-[#FF9F9F]/90 focus-visible:ring-[#FF9F9F]/20 dark:focus-visible:ring-[#FF9F9F]/40",
        outline:
          "border-2 border-[#4ECDC4] bg-white text-[#4ECDC4] shadow-lg hover:bg-[#4ECDC4] hover:text-white dark:bg-white/30 dark:border-[#4ECDC4] dark:hover:bg-[#4ECDC4]/50",
        secondary:
          "bg-[#FFE66D] text-[#2C3E50] shadow-lg hover:bg-[#FFE66D]/90 hover:scale-105 transform",
        ghost:
          "hover:bg-[#4ECDC4]/20 hover:text-[#4ECDC4] dark:hover:bg-[#4ECDC4]/30",
        link: "text-[#4ECDC4] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 px-4 py-2 has-[>svg]:px-3 text-base md:h-12 md:px-6 md:py-3 md:has-[>svg]:px-4 md:text-lg",
        sm: "h-8 gap-2 px-3 has-[>svg]:px-2 text-sm md:h-10 md:gap-2 md:px-4 md:has-[>svg]:px-3 md:text-base",
        lg: "h-12 px-6 has-[>svg]:px-4 text-lg md:h-14 md:px-8 md:has-[>svg]:px-6 md:text-xl",
        icon: "size-10 md:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
