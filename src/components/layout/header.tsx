"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MainNav from "../nav/main-nav";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const MobileNav = dynamic(
  () => import("../nav/mobile-nav").then((m) => m.MobileNav),
  { ssr: false }
);

export default function Header() {
  const isHome = usePathname() === "/";
  return (
    <header
      className={cn(
        "w-full px-4 py-2 absolute top-0 left-0 z-20",
        isHome && "md:bg-black/40 md:backdrop-blur-sm"
      )}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto ">
        <div>
          <Link href="/" prefetch={false}>
            <Image
              className="w-30 h-auto sm:w-40 md:w-40 lg:w-45 xl:w-50 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
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
