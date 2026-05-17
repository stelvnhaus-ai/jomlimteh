import { wedding } from "@/lib/config";

export default function Schedule() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-[11px] tracking-[0.4em] text-bronze-dark mb-3">
            — THE DAY · 时间 —
          </div>
          <h2 className="font-num text-3xl md:text-5xl text-walnut leading-tight">
            {wedding.date.dayOfWeekEn}, {wedding.date.full}
          </h2>
          <p className="font-serif italic text-bronze text-sm md:text-base mt-3 tracking-wider">
            {wedding.date.lunarZh}
          </p>
        </div>

        <div className="border border-bronze/30 rounded-sm py-8 md:py-10 px-6">
          <div className="grid grid-cols-2 gap-4 divide-x divide-bronze/20">
            <div className="text-center px-4">
              <div className="font-mono text-[10px] tracking-[0.3em] text-bronze-dark leading-relaxed">
                <div>{wedding.schedule.cocktailZh}</div>
                <div>{wedding.schedule.cocktailEn.toUpperCase()}</div>
              </div>
              <div className="font-num text-4xl md:text-5xl text-walnut mt-3">
                {wedding.schedule.cocktailTime}
              </div>
            </div>
            <div className="text-center px-4">
              <div className="font-mono text-[10px] tracking-[0.3em] text-bronze-dark leading-relaxed">
                <div>{wedding.schedule.dinnerZh}</div>
                <div>{wedding.schedule.dinnerEn.toUpperCase()}</div>
              </div>
              <div className="font-num text-4xl md:text-5xl text-walnut mt-3">
                {wedding.schedule.dinnerTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
