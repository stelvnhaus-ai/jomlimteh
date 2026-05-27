"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    // Attempt autoplay — browsers may silently reject (especially iOS Safari)
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // Autoplay was blocked. Wait for first user interaction anywhere on page.
        const onFirstInteraction = async () => {
          try {
            await audio.play();
            setPlaying(true);
          } catch {
            // Still blocked — user will need to tap the button explicitly
          }
          window.removeEventListener("click", onFirstInteraction);
          window.removeEventListener("touchstart", onFirstInteraction);
          window.removeEventListener("scroll", onFirstInteraction);
        };
        window.addEventListener("click", onFirstInteraction, { once: true });
        window.addEventListener("touchstart", onFirstInteraction, { once: true });
        window.addEventListener("scroll", onFirstInteraction, { once: true });
      }
    };

    tryAutoplay();
    setInteractive(true);

    return () => {
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // Ignore — shouldn't happen since this is a user click
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="auto" />
      {interactive && (
        <button
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 rounded-full pl-2 pr-4 md:pr-5 py-2 transition-all hover:scale-105 active:scale-95"
          style={{
            background: "rgba(244,239,227,0.95)",
            border: "0.5px solid rgba(184,134,74,0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 4px 16px rgba(44, 32, 20, 0.08)",
          }}
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-cream flex-shrink-0"
            style={{ background: "#C0392B" }}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </span>
          <span className="font-mono text-[11px] md:text-xs tracking-[0.2em] text-walnut whitespace-nowrap">
            <span className="md:hidden">
              {playing ? "♪ PERFECT" : "PLAY MUSIC"}
            </span>
            <span className="hidden md:inline">
              {playing ? "NOW PLAYING · PERFECT" : "TAP TO PLAY · PERFECT"}
            </span>
          </span>
        </button>
      )}
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="5" y="4" width="5" height="16" rx="0.5" />
      <rect x="14" y="4" width="5" height="16" rx="0.5" />
    </svg>
  );
}
