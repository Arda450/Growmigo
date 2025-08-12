"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YoutubeLazyProps {
  videoId: string;
  title: string;
  description?: string;
}

export default function YoutubeLazy({
  videoId,
  title,
  description,
}: YoutubeLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="aspect-video rounded-lg overflow-hidden relative">
        {!isLoaded ? (
          <>
            {/* YouTube Thumbnail - lädt nur wenn sichtbar */}
            {isVisible && (
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                fill
                className="object-cover"
                loading="lazy"
              />
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-colors duration-200 transform hover:scale-110"
                aria-label={`Play ${title}`}
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Fallback für nicht-sichtbare Videos */}
            {!isVisible && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Video wird geladen...</div>
              </div>
            )}
          </>
        ) : (
          /* Echtes YouTube iframe - lädt erst nach Klick */
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>

      <h3 className="text-lg font-semibold mt-3 text-center">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 text-center mt-1">{description}</p>
      )}
    </div>
  );
}
