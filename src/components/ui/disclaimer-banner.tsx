"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-3 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm">
            DEMO
          </div>
          <p className="text-sm md:text-base">
            <strong>Achtung:</strong> Dies ist eine Demo-Website in Entwicklung.
            Impressum und Datenschutzerklärung enthalten Platzhalter-Daten und
            sind nicht rechtsverbindlich.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-red-200 transition-colors ml-4 flex-shrink-0"
          aria-label="Banner schließen"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
