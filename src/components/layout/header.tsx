"use client";

import MainNav from "../nav/main-nav";
import { useNav } from "@/hooks/use-nav";
import { MobileNav } from "../nav/mobile-nav";

export default function Header() {
  const { isHomePage } = useNav();

  return (
    <header className="w-full px-4 py-4 absolute top-0 left-0 z-20 border border-red-500 ">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            Growmigo
          </h1>
        </div>
        <MainNav className="hidden md:block border border-gray" />
        <div className="flex items-center justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
