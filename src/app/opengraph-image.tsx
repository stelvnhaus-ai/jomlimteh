import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yan Yang & Bee Hui — A Wedding in Kuala Lumpur · 20 September 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a font file from Google Fonts as ArrayBuffer.
// We hit the CSS endpoint, extract the .woff2 URL, then fetch it.
async function loadFont(googleFontsCssUrl: string): Promise<ArrayBuffer> {
  const css = await fetch(googleFontsCssUrl, {
    headers: {
      // User-Agent matters: without it, Google returns legacy .ttf/.eot;
      // with a modern browser UA it returns .woff2.
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\(([^)]+)\)\s*format/);
  if (!match) throw new Error(`Font URL not found in CSS from ${googleFontsCssUrl}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [allura, crimson, lato, mono] = await Promise.all([
    loadFont("https://fonts.googleapis.com/css2?family=Allura"),
    loadFont("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400"),
    loadFont("https://fonts.googleapis.com/css2?family=Lato:wght@300"),
    loadFont("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400"),
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
