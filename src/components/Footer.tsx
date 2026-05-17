import { wedding } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-bronze/20 text-center">
      <div className="font-serif text-3xl text-bronze mb-3">囍</div>
      <div className="font-mono text-[11px] tracking-[0.3em] text-bronze-dark">
        {wedding.groom.firstNameEn.toUpperCase()} &amp;{" "}
        {wedding.bride.firstNameEn.toUpperCase()} · {wedding.date.short}
      </div>
      <div className="font-serif italic text-walnut-light text-sm mt-3">
        {wedding.domain}
      </div>
      <div className="font-mono text-[10px] tracking-[0.3em] text-bronze-dark/60 mt-6">
        DESIGNED &amp; BUILT WITH CLAUDE OPUS 4.7
      </div>
    </footer>
  );
}
