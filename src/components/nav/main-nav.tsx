"use client";

import React from "react";
import Link from "next/link";
import { useNav } from "@/hooks/use-nav";
import { useRouter } from "next/navigation";

export default function MainNav({ className }: { className?: string }) {
  const { isHomePage } = useNav();
  const router = useRouter();
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
          prefetch={false}
          onMouseEnter={() => router.prefetch(item.href)} //gezielt bei Hover fetchen, damit die Seite schneller lädt
          className={`text-xl font-fredoka px-3 py-1 hover:bg-[#422b1c] hover:text-white transition rounded-lg ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
