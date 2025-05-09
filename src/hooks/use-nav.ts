"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useNav() {
  const pathname = usePathname(); // next.js hook
  const [isHomePage, setIsHomePage] = useState(false); // ishomepage ist ein boolean der angibt ob der aktuelle Pfadname "/" ist.

  // kontrolliert ob der aktuelle Pfadname "/" ist. wenn ja, wird der Zustand auf true gesetzt.
  useEffect(() => {
    setIsHomePage(pathname === "/"); // wenn auf homepage, wird der zustand auf true gesetzt.
  }, [pathname]);

  return { isHomePage };
}
