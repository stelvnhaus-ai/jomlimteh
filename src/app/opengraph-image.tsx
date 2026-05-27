import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yan Yang & Bee Hui — A Wedding in Kuala Lumpur · 20 September 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a font from Google Fonts as ArrayBuffer in TTF/OTF format.
// CRITICAL: @vercel/og (Satori) does NOT support WOFF2 — only TTF/OTF/WOFF.
// Sending no User-Agent header makes Google return the TTF URL.
// The `text` parameter subsets the font to only include the glyphs we use.
async function loadFont(family: string, text: string, weight?: number): Promise<ArrayBuffer> {
  const familyParam = weight ? `${family}:wght@${weight}` : family;
  const url = `https://fonts.googleapis.com/css2?family=${familyParam}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((r) => r.text());

  // Match TTF or OTF specifically (not WOFF2).
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(opentype|truetype)['"]?\)/);
  if (!match) throw new Error(`No TTF/OTF font URL in CSS for ${family}. CSS was: ${css.slice(0, 200)}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [allura, crimson, lato, mono] = await Promise.all([
    loadFont("Allura", "Yan Yang Bee Hui"),
    loadFont("Crimson+Pro", "20 SEPTEMBER 2026", 400),
    loadFont("Lato", "&", 300),
    loadFont("JetBrains+Mono", "— A WEDDING IN KUALA LUMPUR — JOMLIMTEH.COM", 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4EFE3",
          color: "#2C2014",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
          fontFamily: "Crimson Pro",
          position: "relative",
        }}
      >
        {/* Subtle inner border */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            right: 30,
            bottom: 30,
            border: "0.5px solid rgba(184,134,74,0.35)",
          }}
        />

        {/* Top tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 32 }}>
          <div style={{ width: 70, height: 1, background: "#B8864A", opacity: 0.5 }} />
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 16,
              letterSpacing: "0.4em",
              color: "#8B6F47",
            }}
          >
            — A WEDDING IN KUALA LUMPUR —
          </div>
          <div style={{ width: 70, height: 1, background: "#B8864A", opacity: 0.5 }} />
        </div>

        {/* Names */}
        <div
          style={{
            fontFamily: "Allura",
            fontSize: 160,
            lineHeight: 1.0,
            color: "#2C2014",
            display: "flex",
          }}
        >
          Yan Yang
        </div>
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 300,
            fontSize: 38,
            letterSpacing: "0.25em",
            color: "#B8864A",
            margin: "6px 0",
            display: "flex",
          }}
        >
          &
        </div>
        <div
          style={{
            fontFamily: "Allura",
            fontSize: 160,
            lineHeight: 1.0,
            color: "#2C2014",
            display: "flex",
            marginBottom: 40,
          }}
        >
          Bee Hui
        </div>

        {/* Date */}
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 40,
            color: "#2C2014",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          20 SEPTEMBER 2026
        </div>

        {/* Bottom — domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontFamily: "JetBrains Mono",
            fontSize: 13,
            letterSpacing: "0.35em",
            color: "#B8864A",
            display: "flex",
          }}
        >
          JOMLIMTEH.COM
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Allura", data: allura, weight: 400, style: "normal" },
        { name: "Crimson Pro", data: crimson, weight: 400, style: "normal" },
        { name: "Lato", data: lato, weight: 300, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
