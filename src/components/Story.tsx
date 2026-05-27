import { wedding } from "@/lib/config";

type Milestone = {
  date: string;
  description: string;
  isFinal?: boolean;
};

const milestones: Milestone[] = [
  {
    date: "2018 · KUALA LUMPUR",
    description:
      "We met in KL — before we started our journey in Singapore.",
  },
  {
    date: "11·11·2022 · SINGLES' DAY",
    description:
      "A proposal on Singles' Day — because the irony wrote itself.",
  },
  {
    date: "15·12·2024 · REGISTERED",
    description:
      "Officially registered. The decision: made yesterday. The commitment: pretty solid actually.",
  },
  {
    date: "20·09·2026 · KL",
    description:
      "And now — the banquet we've been holding our breath for. With you.",
    isFinal: true,
  },
];

export default function Story() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-[11px] tracking-[0.4em] text-bronze-dark mb-2">
            — OUR STORY · 故事 —
          </div>
          <div className="font-serif text-5xl md:text-6xl text-bronze">囍</div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-md mx-auto pl-8 md:pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] md:left-[6px] top-2 bottom-2 w-[0.5px] bg-bronze"
            aria-hidden="true"
          />

          {milestones.map((m, i) => (
            <div
              key={i}
              className={`relative ${
                i < milestones.length - 1 ? "mb-8 md:mb-10" : ""
              }`}
            >
              {/* Dot node */}
              <div
                className={`absolute -left-[32px] md:-left-[37px] top-[6px] rounded-full ${
                  m.isFinal ? "w-3 h-3" : "w-[11px] h-[11px]"
                }`}
                style={{
                  background: m.isFinal ? "#2C2014" : "#C0392B",
                  boxShadow: m.isFinal
                    ? "0 0 0 4px rgba(192,57,43,0.2)"
                    : "none",
                }}
                aria-hidden="true"
              />
              <div
                className="font-mono text-xs tracking-[0.15em] font-medium mb-1"
                style={{ color: m.isFinal ? "#2C2014" : "#C0392B" }}
              >
                {m.date}
              </div>
              <p
                className={`font-serif text-base md:text-lg leading-relaxed ${
                  m.isFinal
                    ? "text-walnut"
                    : "text-walnut-light italic"
                }`}
              >
                {m.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 font-serif italic text-bronze text-sm md:text-base">
          — Yan Yang &amp; Bee Hui
        </div>

      </div>
    </section>
  );
}

