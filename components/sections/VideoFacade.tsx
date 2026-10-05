"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = { vimeoId: string; title: string; duration: string };

/**
 * Click-to-load video. Nothing loads from Vimeo until the visitor presses play, and the
 * player runs in Vimeo's do-not-track mode, so the page itself sets no cookies.
 */
export function VideoFacade({ vimeoId, title, duration }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md bg-panel">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?dnt=1&autoplay=1&title=0&byline=0&portrait=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="surface-brand group flex aspect-[9/16] w-full flex-col justify-end rounded-md p-6 text-left"
    >
      <span className="grid h-16 w-16 place-items-center rounded-full bg-cream text-panel transition-transform duration-fast group-hover:scale-105">
        <Play className="ml-1 h-7 w-7" aria-hidden="true" />
      </span>
      <span className="mt-5 font-display text-h3 font-semibold text-heading">{title}</span>
      <span className="mt-1 text-fg-muted">
        Play video, {duration}
      </span>
    </button>
  );
}
