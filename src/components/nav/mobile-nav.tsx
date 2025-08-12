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
import { OpenMoji } from "@/components/ui/openmoji";

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
        className="w-[300px] sm:w-[350px] p-0 overflow-hidden bg-gradient-to-b from-white to-[#ff914d] font-fredoka"
      >
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute bottom-16 left-12">
            <OpenMoji emoji="apple" size={40} />
          </div>
          <div className="absolute top-20 right-8">
            <OpenMoji emoji="carrot" size={48} />
          </div>
          <div className="absolute top-32 left-12">
            <OpenMoji emoji="strawberry" size={40} />
          </div>
          <div className="absolute top-48 right-6">
            <OpenMoji emoji="lettuce" size={48} />
          </div>
          <div className="absolute top-64 left-8">
            <OpenMoji emoji="orange" size={40} />
          </div>
          <div className="absolute top-80 right-12">
            <OpenMoji emoji="eggplant" size={56} />
          </div>
          <div className="absolute bottom-80 left-10">
            <OpenMoji emoji="cucumber" size={48} />
          </div>
          <div className="absolute bottom-48 right-4">
            <OpenMoji emoji="banana" size={40} />
          </div>
          <div className="absolute bottom-40 left-24">
            <OpenMoji emoji="broccoli" size={48} />
          </div>
          <div className="absolute bottom-16 right-10">
            <OpenMoji emoji="tomato" size={40} />
          </div>
        </div>

        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 py-4 border-b border-white/20 bg-white/10">
            <SheetTitle className="text-2xl font-bold text-[#422b1c] text-left">
              Growmigo
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 px-6 py-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-lg font-medium ${
                      pathname === item.href
                        ? "bg-[#422b1c] text-white shadow-lg"
                        : "text-[#422b1c] hover:bg-white/20 hover:text-[#2d1f15]"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>

          <div className="px-6 py-4 border-t border-white/20 bg-white/10">
            <div className="flex justify-center gap-4 mb-4">
              {socialMediaIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#422b1c] hover:text-[#2d1f15] transition-colors p-2 rounded-lg hover:bg-white/20"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-4 text-sm">
              {footerItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-[#422b1c] hover:text-[#2d1f15] transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
