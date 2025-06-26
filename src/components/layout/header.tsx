"use client";

import MainNav from "../nav/main-nav";
import { useNav } from "@/hooks/use-nav";
import { MobileNav } from "../nav/mobile-nav";
import Link from "next/link";

export default function Header() {
  const { isHomePage } = useNav();

  return (
    <header className="w-full px-4 py-4 absolute top-0 left-0 z-20">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <Link href="/">Growmigo</Link>
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <MainNav className="hidden md:block" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
