import { wedding } from "@/lib/config";

export default function DressCode() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="font-mono text-[11px] tracking-[0.4em] text-bronze-dark mb-2">
          — DRESS CODE · 衣着 —
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-walnut mt-2">
          {wedding.dressCode.en}
        </h2>
        <p className="font-serif text-xl text-bronze mt-1">{wedding.dressCode.zh}</p>

        {/* Color palette swatches */}
        <div className="mt-10 flex justify-center gap-3 md:gap-4">
          {[
            { hex: "#F4EFE3", name: "cream" },
            { hex: "#B8864A", name: "bronze" },
            { hex: "#8B6F47", name: "walnut" },
            { hex: "#2C2014", name: "deep" },
            { hex: "#6B7A5C", name: "sage" },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-bronze/30"
                style={{ background: c.hex }}
                aria-label={c.name}
              />
            </div>
          ))}
        </div>

        <p className="mt-8 font-serif italic text-walnut-light text-sm md:text-base">
          {wedding.dressCode.note}
        </p>
      </div>
    </section>
  );
}
