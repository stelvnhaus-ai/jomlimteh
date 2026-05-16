/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE3",
        "cream-warm": "#EFE9DC",
        walnut: "#2C2014",
        "walnut-light": "#4A3826",
        bronze: "#B8864A",
        "bronze-light": "#C9A876",
        "bronze-dark": "#8B6F47",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-italiana)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
