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
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full pl-2 pr-3 md:pr-4 py-2 transition-all hover:scale-105"
          style={{
            background: "rgba(244,239,227,0.92)",
            border: "0.5px solid rgba(184,134,74,0.4)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-cream"
            style={{ background: "#C0392B" }}
          >
            {playing ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </span>
          <span className="hidden md:inline font-mono text-[11px] tracking-[0.2em] text-bronze-dark">
            {playing ? "PAUSE" : "PLAY"}
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
