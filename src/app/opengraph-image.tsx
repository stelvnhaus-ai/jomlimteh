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
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(opentype|truetype)['"]?\)/);
  if (!match) throw new Error(`No TTF/OTF font URL in CSS for ${family}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [crimson, mono] = await Promise.all([
    loadFont("Crimson+Pro", "Yan Yang & Bee Hui 20 SEPTEMBER 2026", 400),
    loadFont("JetBrains+Mono", "— A WEDDING IN KUALA LUMPUR — jomlimteh.com", 400),
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
          fontFamily: "Crimson Pro",
          position: "relative",
        }}
      >
        {/* Subtle inner border */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: "0.5px solid rgba(184,134,74,0.4)",
          }}
        />

        {/* Top tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 80,
          }}
        >
          <div style={{ width: 60, height: 1, background: "#B8864A", opacity: 0.5 }} />
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 18,
              letterSpacing: "0.4em",
              color: "#8B6F47",
            }}
          >
            — A WEDDING IN KUALA LUMPUR —
          </div>
          <div style={{ width: 60, height: 1, background: "#B8864A", opacity: 0.5 }} />
        </div>

        {/* Names — single line, clean serif */}
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 92,
            lineHeight: 1.1,
            color: "#2C2014",
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Yan Yang &amp; Bee Hui
        </div>

        {/* Spacer ornament */}
        <div
          style={{
            width: 80,
            height: 1,
            background: "#B8864A",
            opacity: 0.6,
            margin: "44px 0",
          }}
        />

        {/* Date */}
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 42,
            color: "#2C2014",
            letterSpacing: "0.06em",
            display: "flex",
          }}
        >
          20 SEPTEMBER 2026
        </div>

        {/* Bottom — domain */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            fontFamily: "JetBrains Mono",
            fontSize: 14,
            letterSpacing: "0.35em",
            color: "#B8864A",
            display: "flex",
          }}
        >
          jomlimteh.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Crimson Pro", data: crimson, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
