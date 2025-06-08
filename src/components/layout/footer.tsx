"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

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

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white">
      {/* sm icons */}
      <div className="w-full py-8 px-8  flex justify-center">
        <p className=" text-gray-300 mr-8">Folge uns!</p>
        <div className="flex gap-6">
          {socialMediaIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FontAwesomeIcon icon={item.icon} size="lg" />
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full py-4 px-8 text-sm flex min-[520px]:flex-row flex-col justify-between items-center sm:text-lg   gap-4 border-t border-gray-800 ">
        <div>
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Growmigo. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          {footerItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
