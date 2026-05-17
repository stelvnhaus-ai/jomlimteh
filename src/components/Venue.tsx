import { wedding } from "@/lib/config";

export default function Venue() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="font-mono text-[10px] tracking-[0.4em] text-bronze-dark mb-3">
            — THE VENUE · 地点 —
          </div>
          <h2 className="font-num text-3xl md:text-5xl text-walnut leading-tight">
            {wedding.venue.nameEn}
          </h2>
          <p className="font-serif text-xl md:text-2xl text-bronze mt-2 tracking-wider">
            {wedding.venue.nameZh}
          </p>
        </div>

        <div className="text-center font-serif text-base md:text-lg text-walnut-light leading-relaxed mb-8">
          {wedding.venue.addressLine1}
          <br />
          {wedding.venue.addressLine2}
          <br />
          {wedding.venue.addressLine3}
        </div>

        {/* Map embed */}
        <div className="aspect-video w-full overflow-hidden rounded-sm border border-bronze/30 mb-6">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(wedding.venue.mapsQuery)}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[40%]"
            title="Venue map"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={wedding.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-6 py-3 border border-walnut text-walnut font-mono text-xs tracking-[0.2em] hover:bg-walnut hover:text-cream transition-colors"
          >
            OPEN IN GOOGLE MAPS →
          </a>
        </div>
      </div>
    </section>
  );
}
