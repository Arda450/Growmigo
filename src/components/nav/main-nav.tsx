"use client";

import React from "react";
import Link from "next/link";
import { useNav } from "@/hooks/use-nav";

export default function MainNav({ className }: { className?: string }) {
  const { isHomePage } = useNav();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tipps", label: "Tipps" },
    { href: "/unser-team", label: "Unser Team" },
  ];

  return (
    <nav className={`flex gap-8 ${className}`}>
      {navItems.map((item) => (
        <Link
          key={`nav-${item.href}`}
          href={item.href}
          className={`text-xl font-fredoka px-3 py-1 hover:bg-[#422b1c] hover:text-white transition ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
