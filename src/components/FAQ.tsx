"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I bring a plus-one?",
    a: "We've worked hard to keep the guest list intimate. Please RSVP only for those named on your invitation. If you'd like to bring an additional guest, drop us a message and we'll do our best to accommodate.",
  },
  {
    q: "Are kids welcome?",
    a: "Yes — well-behaved little ones are absolutely welcome. Please include them in your guest count when you RSVP so we can plan seating.",
  },
  {
    q: "Is there a gift registry?",
    a: "Your presence is the present. If you'd still like to give, an angpao on the day is the easiest and most appreciated.",
  },
  {
    q: "Where should I park?",
    a: "Sunway Square's basement parking is the most convenient — entry from Jalan Lagoon Selatan. There's also valet at the building's main entrance if you prefer.",
  },
  {
    q: "What about dietary requirements?",
    a: "The banquet is a 8-course Chinese set menu. Let us know in the RSVP form if anyone in your party has dietary restrictions (vegetarian, halal, allergies) and we'll arrange alternatives.",
  },
  {
    q: "Will there be photography?",
    a: "Yes — we'll have a photographer covering the day. Feel free to take your own photos too. We'd love it if you tagged any social posts so we don't miss them.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-[11px] tracking-[0.4em] text-bronze-dark mb-2">
            — FREQUENTLY ASKED · 常见问题 —
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-walnut mt-2">
            Things you might be wondering
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-bronze/20 rounded-sm bg-cream-warm/40"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
                aria-expanded={open === i}
              >
                <span className="font-serif text-base md:text-lg text-walnut">
                  {f.q}
                </span>
                <span
                  className={`font-mono text-bronze text-xl transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 font-serif italic text-walnut-light leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
