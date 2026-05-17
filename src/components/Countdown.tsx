"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/config";

function getTimeLeft(targetIso: string) {
  const diff = +new Date(targetIso) - +new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  };
}

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft(wedding.date.iso));
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(wedding.date.iso)), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.past) {
    return (
      <section className="py-16 md:py-20 px-6 text-center border-t border-bronze/20">
        <p className="font-serif italic text-2xl md:text-3xl text-bronze">
          Thank you for being part of our day.
        </p>
      </section>
    );
  }

  const blocks = [
    { label: "DAYS", value: t.days },
    { label: "HOURS", value: t.hours },
    { label: "MIN", value: t.minutes },
    { label: "SEC", value: t.seconds },
  ];

  return (
    <section className="py-16 md:py-24 px-6 border-t border-bronze/20">
      <div className="text-center mb-8">
        <div className="font-mono text-[11px] tracking-[0.4em] text-bronze-dark">
          — COUNTING DOWN —
        </div>
      </div>
      <div className="max-w-2xl mx-auto grid grid-cols-4 gap-3 md:gap-6">
        {blocks.map((b) => (
          <div key={b.label} className="text-center">
            <div className="font-num text-5xl md:text-7xl text-walnut leading-none tabular-nums">
              {String(b.value).padStart(2, "0")}
            </div>
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-bronze-dark mt-2 md:mt-3">
              {b.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
