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
    <div className="bg-red-600 text-white p-4 fixed bottom-4 left-4 right-4 z-[100] rounded-lg shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm flex-shrink-0">
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
          className="text-white hover:text-red-200 transition-colors flex-shrink-0"
          aria-label="Banner schließen"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
