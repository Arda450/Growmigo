"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-3 fixed top-0 inset-x-0 z-[100]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm">
            STUDIEN-PROJEKT
          </div>
          <p className="text-sm md:text-base">
            <strong>Studienprojekt:</strong> Dies ist eine nicht-kommerzielle
            Studienarbeit. Verwendete Fonts und Assets sind nur für
            Bildungszwecke lizenziert. Das Kontaktformular dient nur zu
            Demonstrationszwecken.
          </p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="text-white hover:text-red-200 transition-colors ml-4 flex-shrink-0"
          aria-label="Banner schließen"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
