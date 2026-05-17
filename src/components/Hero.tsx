import { wedding } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 py-8 md:px-12 md:py-12 overflow-hidden">
      {/* Top corner marks */}
      <div className="flex justify-between items-start font-mono text-[10px] md:text-xs tracking-[0.3em] text-bronze-dark relative z-10">
        <div>
          № 001<br />
          KL · MY
        </div>
        <div className="text-right">
          EST.<br />
          {wedding.date.short.replace(/\./g, "·")}
        </div>
      </div>

      {/* Decorative top-center Chinese phrase + ornament — visible everywhere */}
      <div className="flex flex-col items-center mt-8 md:mt-12 relative z-10">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="h-[0.5px] w-8 md:w-12 bg-bronze/60" aria-hidden="true" />
          <span className="font-serif text-bronze-dark tracking-[0.4em] text-xs md:text-sm">
            喜结良缘
          </span>
          <span className="h-[0.5px] w-8 md:w-12 bg-bronze/60" aria-hidden="true" />
        </div>
        <span className="mt-3 md:mt-4 font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-bronze">
          — A WEDDING IN KUALA LUMPUR —
        </span>
      </div>

      {/* Vertical Chinese poem on right edge — desktop only */}
      <div
        className="hidden lg:flex absolute top-1/2 right-12 -translate-y-1/2 flex-col items-center gap-3 z-10"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="font-serif text-2xl text-walnut tracking-[0.3em]">
          天作之合
        </span>
        <span
          className="h-[60px] w-[0.5px] bg-bronze"
          style={{ writingMode: "horizontal-tb" }}
        />
        <span className="font-serif text-lg text-bronze-dark tracking-[0.3em]">
          百年好合
        </span>
      </div>

      {/* Hero names — centered for better feel */}
      <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10 my-4">
        <h1 className="font-display font-normal text-walnut hero-name">
          {wedding.groom.firstNameEn}
        </h1>
        <div className="font-lato font-light text-bronze text-3xl md:text-4xl my-3 md:my-4 leading-none tracking-[0.2em]">
          &amp;
        </div>
        <h1 className="font-display font-normal text-walnut hero-name">
          {wedding.bride.firstNameEn}
        </h1>

        {/* Chinese names below */}
        <div className="mt-6 md:mt-8 font-cn-display text-2xl md:text-3xl text-bronze-dark tracking-[0.25em]">
          {wedding.groom.nameZh} · {wedding.bride.nameZh}
        </div>

        {/* Red 囍 seal stamp + jom lim teh */}
        <div className="mt-6 md:mt-8 flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-sm font-serif text-xl md:text-2xl text-cream leading-none"
            style={{ background: "#C0392B", transform: "rotate(-3deg)" }}
          >
            囍
          </span>
          <span className="font-serif italic text-bronze-dark text-base md:text-lg">
            jom lim teh.
          </span>
        </div>
      </div>

      {/* Date strip with stylized day number */}
      <div className="relative z-10 mt-4">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <span className="h-[0.5px] flex-1 max-w-[80px] bg-bronze/40" aria-hidden="true" />
          <div className="flex items-baseline gap-2 md:gap-3 font-num text-walnut">
            <span className="text-sm md:text-base font-serif text-bronze-dark tracking-[0.2em]">SUN</span>
            <span className="text-3xl md:text-4xl leading-none">20</span>
            <span className="text-sm md:text-base font-serif text-bronze-dark tracking-[0.2em]">SEP</span>
            <span className="text-3xl md:text-4xl leading-none">26</span>
          </div>
          <span className="h-[0.5px] flex-1 max-w-[80px] bg-bronze/40" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="mt-6 md:mt-8 pt-6 relative z-10">
        <div className="divider-line mb-5" />
        <div className="flex justify-between items-end gap-4">
          <div>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-bronze-dark">
              {wedding.schedule.dinnerZh} · DINNER
            </div>
            <div className="font-num text-walnut mt-1 leading-snug text-xl md:text-2xl">
              {wedding.schedule.dinnerTime}
            </div>
            <div className="font-serif italic text-bronze-dark text-sm mt-1">
              {wedding.venue.nameEn} · {wedding.venue.nameZh}
            </div>
          </div>
          <div className="font-serif italic text-bronze text-sm md:text-base">
            scroll ↓
          </div>
        </div>
      </div>
    </section>
  );
}
