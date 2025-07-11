"use client";

import MainNav from "../nav/main-nav";
import { MobileNav } from "../nav/mobile-nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-4 py-2 absolute top-0 left-0 z-20">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              className="w-30 h-auto sm:w-40 md:w-40 lg:w-45 xl:w-50"
              src="/logo.svg"
              alt="Image of the logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <MainNav className="hidden md:block" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
