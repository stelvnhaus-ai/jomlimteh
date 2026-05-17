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
          <div className="font-mono text-[10px] tracking-[0.4em] text-bronze-dark mb-2">
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
                className="font-mono text-[11px] tracking-[0.15em] font-medium mb-1"
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

        {/* Parents block */}
        <div className="mt-20 pt-12 border-t border-bronze/20">
          <div className="text-center mb-10">
            <div className="font-mono text-[10px] tracking-[0.4em] text-bronze-dark">
              — 谨订于 · TOGETHER WITH OUR FAMILIES —
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {/* Bride's family — LEFT (女家) */}
            <div className="text-center">
              <div className="font-mono text-[9px] tracking-[0.3em] text-bronze mb-4">
                女家 · BRIDE'S FAMILY
              </div>
              <ParentLine person={wedding.parents.bride.father} />
              <div className="text-bronze text-xs my-3 md:my-4">·</div>
              <ParentLine person={wedding.parents.bride.mother} />
            </div>

            {/* Groom's family — RIGHT (男家) */}
            <div className="text-center">
              <div className="font-mono text-[9px] tracking-[0.3em] text-bronze mb-4">
                男家 · GROOM'S FAMILY
              </div>
              <ParentLine person={wedding.parents.groom.father} />
              <div className="text-bronze text-xs my-3 md:my-4">·</div>
              <ParentLine person={wedding.parents.groom.mother} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParentLine({
  person,
}: {
  person: { en: string; zh: string; deceased: boolean };
}) {
  return (
    <div className="font-serif text-base md:text-lg text-walnut leading-snug">
      {/* Reserved label space — same height whether deceased or not, keeps grid aligned */}
      <div
        className="font-mono text-[9px] tracking-[0.2em] mb-2 md:mb-1 min-h-[28px] leading-tight md:h-[14px] md:min-h-0 md:leading-[14px]"
        style={{ color: person.deceased ? "#8B6F47" : "transparent" }}
        aria-hidden={!person.deceased}
      >
        {person.deceased ? "先严 · IN LOVING MEMORY" : "\u00A0"}
      </div>
      <div
        className={`font-cn-display text-2xl md:text-3xl leading-tight tracking-[0.1em] ${
          person.deceased ? "italic" : ""
        }`}
      >
        {person.zh}
      </div>
      <div
        className={`text-walnut-light text-sm mt-1 ${
          person.deceased ? "italic" : ""
        }`}
      >
        {person.en}
      </div>
    </div>
  );
}
