"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpen, Home, Menu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useNav } from "@/hooks/use-nav";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "/tipps", label: "Tipps", icon: <BookOpen className="h-5 w-5" /> },
  {
    href: "/unser-team",
    label: "Unser Team",
    icon: <Users className="h-5 w-5" />,
  },
];

const socialMediaIcons = [
  {
    href: "https://facebook.com",
    icon: faFacebook,
    name: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: faInstagram,
    name: "Instagram",
  },
  {
    href: "https://tiktok.com",
    icon: faTiktok,
    name: "TikTok",
  },
];

const footerItems = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function MobileNav() {
  const { isHomePage } = useNav();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={`md:hidden p-2 hover:bg-white/20 transition-all duration-300 ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <Menu className="!size-8 stroke-[3]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] p-0 overflow-hidden bg-gradient-to-b from-white to-green-200"
      >
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute bottom-16 left-12 text-2xl">🍎</div>
          <div className="absolute top-20 right-8 text-3xl">🥕</div>
          <div className="absolute top-32 left-12 text-2xl">🍓</div>
          <div className="absolute top-48 right-6 text-3xl">🥬</div>
          <div className="absolute top-64 left-8 text-2xl">🍊</div>
          <div className="absolute top-80 right-12 text-4xl">🍆</div>
          <div className="absolute bottom-80 left-10 text-3xl">🥒</div>
          <div className="absolute bottom-48 right-4 text-2xl">🍌</div>
          <div className="absolute bottom-40 left-24 text-3xl">🥦</div>
          <div className="absolute bottom-16 right-10 text-2xl">🍅</div>
        </div>

        <SheetHeader className="border-b p-6">
          <SheetTitle className="text-2xl font-bold text-green-700">
            Growmigo
          </SheetTitle>
        </SheetHeader>

        <div className="px-6 py-3 text-md font-semibold text-gray-500 uppercase tracking-wider">
          Hauptmenü
        </div>
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-md transition-all ${
                  pathname === item.href
                    ? "bg-green-200 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="px-6 py-3 text-md< font-semibold text-gray-500 uppercase tracking-wider mt-4">
          Weiteres
        </div>

        <nav className="flex flex-col p-4">
          {footerItems.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-all hover:bg-gray-100"
              >
                <span className="font-medium text-gray-600">{item.label}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t mx-6 mb-6">
          <div className="flex justify-center gap-4 mb-4">
            {socialMediaIcons.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 text-green-700 hover:text-green-800 transition-all hover:scale-110 hover:shadow-md"
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Growmigo
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
