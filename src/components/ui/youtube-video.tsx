"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeVideo({
  videoId,
  title,
  className = "",
}: YouTubeVideoProps) {
  // Optionen für den YouTube-Player
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className={`relative w-full ${className}`}>
      {title && <h3 className="mb-3 font-semibold">{title}</h3>}
      <div className="aspect-video rounded-lg overflow-hidden">
        <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
      </div>
    </div>
  );
}
