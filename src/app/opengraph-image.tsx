import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yan Yang & Bee Hui — A Wedding in Kuala Lumpur · 20 September 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a font from Google Fonts as ArrayBuffer in TTF/OTF format.
// @vercel/og (Satori) does NOT support WOFF2 — only TTF/OTF/WOFF.
// Sending no User-Agent header makes Google return the TTF URL.
async function loadFont(family: string, text: string, weight?: number): Promise<ArrayBuffer> {
  const familyParam = weight ? `${family}:wght@${weight}` : family;
  const url = `https://fonts.googleapis.com/css2?family=${familyParam}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(opentype|truetype)['"]?\)/);
  if (!match) throw new Error(`No TTF/OTF font URL in CSS for ${family}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  // Designed thumbnail-first: WhatsApp / iMessage center-crop the 1200x630
  // image to roughly square. All critical content must fit inside a center
  // column ~600px wide, and text must be large enough to survive downscaling
  // to ~200px wide previews.
  const [crimson, mono] = await Promise.all([
    loadFont("Crimson+Pro", "Yan Yang & Bee Hui 20 SEPTEMBER 2026", 400),
    loadFont("JetBrains+Mono", "KUALA LUMPUR · 20.09.26", 400),
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

        {/* Names — stacked so they fit in a narrow center column when cropped */}
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 118,
            lineHeight: 1.0,
            color: "#2C2014",
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Yan Yang
        </div>
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 56,
            lineHeight: 1.0,
            color: "#B8864A",
            margin: "12px 0",
            display: "flex",
          }}
        >
          &amp;
        </div>
        <div
          style={{
            fontFamily: "Crimson Pro",
            fontSize: 118,
            lineHeight: 1.0,
            color: "#2C2014",
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Bee Hui
        </div>

        {/* Ornament divider */}
        <div
          style={{
            width: 100,
            height: 1,
            background: "#B8864A",
            opacity: 0.6,
            margin: "44px 0 32px 0",
          }}
        />

        {/* Tagline — short enough to survive crop */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: "0.35em",
            color: "#8B6F47",
            display: "flex",
            marginBottom: 16,
          }}
        >
          KUALA LUMPUR
        </div>

        {/* Date — prominent, central, big enough to read at thumbnail size */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 38,
            color: "#2C2014",
            letterSpacing: "0.2em",
            display: "flex",
          }}
        >
          20.09.26
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
