const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#2B2B2B",
        accent: "#FFC700",
        background: "#0A0A0A",
        foreground: "#F4F4F4",
        ring: "#FFDB58",
        muted: "#888888",
        'muted-foreground': "#AAAAAA",
        'amber-mid': "#FFB800",
        'charcoal': "#2B2B2B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Rajdhani", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 199, 0, 0.2)",
        'glow-strong': "0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 199, 0, 0.3)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        'spark': "spark 2s ease-in-out infinite",
        'pulse-glow': "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        spark: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 199, 0, 0.3)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
