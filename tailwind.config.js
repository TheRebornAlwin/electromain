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
        primary: "#F59E0B",      // Amber-500 - warm, professional
        secondary: "#1F2937",     // Gray-800 - dark text
        accent: "#F97316",        // Orange-500 - vibrant accent
        background: "#FFFFFF",    // Pure white
        foreground: "#1F2937",    // Dark gray text
        ring: "#D97706",          // Amber-600 - golden ring
        muted: "#6B7280",         // Gray-500 - muted elements
        'muted-foreground': "#9CA3AF", // Gray-400 - subtle text
        'amber-mid': "#FB923C",   // Orange-400 - mid-tone
        'charcoal': "#374151",    // Gray-700 - charcoal
        'gold': "#EAB308",        // Yellow-500 - gold accents
        'light-bg': "#F9FAFB",    // Gray-50 - subtle background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Rajdhani", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(251, 146, 60, 0.15), 0 0 40px rgba(245, 158, 11, 0.1)",
        'glow-strong': "0 0 30px rgba(251, 146, 60, 0.25), 0 0 60px rgba(245, 158, 11, 0.15)",
        'luxury': "0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)",
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
          '0%, 100%': { boxShadow: '0 0 15px rgba(251, 146, 60, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 146, 60, 0.4), 0 0 45px rgba(245, 158, 11, 0.2)' },
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
