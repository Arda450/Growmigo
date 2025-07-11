"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "secondary";
  target?: string;
  rel?: string;
}

const AnimatedButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  AnimatedButtonProps
>(
  (
    { children, href, onClick, className, variant = "default", ...props },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const baseClasses = cn(
      "group inline-flex items-center px-8 py-3 text-white font-more-sugar font-medium text-lg md:text-xl",
      "bg-[#909d7b] transition-all duration-300 shadow-[6px_6px_0_#d1d5db]",
      "transform -skew-x-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400",
      "active:scale-95 active:shadow-[4px_4px_0_black]", // Mobile press feedback
      // Hover effects für Desktop
      "hover:bg-[#ff914d] hover:shadow-[10px_10px_0_#422b1c] hover:duration-300",
      // Touch/pressed state
      isPressed && "shadow-[8px_8px_0_#422b1c] scale-[0.98]",
      isTouched && "shadow-[8px_8px_0_#422b1c]",
      variant === "secondary" && "bg-gray-700",
      className
    );

    const spanClasses = "transform skew-x-12";

    const svgClasses = cn(
      "w-8 h-6 ml-6 relative top-0.5 transition-all duration-300",
      // Desktop hover
      "group-hover:ml-12",
      // Mobile touch states
      (isPressed || isTouched) && "ml-12"
    );

    // Touch event handlers
    const handleTouchStart = () => {
      setIsTouched(true);
      setIsPressed(true);
    };

    const handleTouchEnd = () => {
      setIsTouched(false);
      setIsPressed(false);
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const handleMouseLeave = () => {
      setIsPressed(false);
      setIsTouched(false);
    };

    if (href) {
      return (
        <Link
          href={href}
          className={baseClasses}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...props}
        >
          <span className={spanClasses}>{children}</span>
          <svg
            className={svgClasses}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      );
    }

    return (
      <button
        className={baseClasses}
        onClick={onClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        <span className={spanClasses}>{children}</span>
        <svg
          className={svgClasses}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
