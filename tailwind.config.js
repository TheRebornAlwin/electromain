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
        // Light Luxury Palette (NO REDS)
        'sun-yellow': "#FFD254",       // Bright highlight
        'amber': "#F6A21A",            // Primary brand color
        'burnt-orange': "#D96A0B",     // Warm accent
        'deep-orange': "#B64E00",      // Rare deep accent
        'charcoal': "#2E2E2E",         // UI text
        'soft-black': "#1C1C1C",       // Headings
        'paper': "#FAFAF8",            // Page background
        'warm-gray': "#F3F2EF",        // Panel backgrounds
        'divider': "#E9E7E2",          // Hairlines

        // Semantic mappings
        primary: "#F6A21A",            // Amber
        secondary: "#D96A0B",          // Burnt Orange (NO RED)
        accent: "#FFD254",             // Sun Yellow
        background: "#FAFAF8",         // Paper
        foreground: "#2E2E2E",         // Charcoal
        muted: "#8A8A8A",              // Mid-gray
        'muted-foreground': "#6A6A6A", // Darker gray
        border: "#E9E7E2",             // Divider
        ring: "#F6A21A",               // Amber ring

        // State colors (NO RED)
        success: "#1BAA6A",
        info: "#2E6FD3",
        warning: "#F6A21A",            // Amber
        error: "#C56E3A",              // Coral (not red)

        // Utility shades
        'light-100': "#FFFFFF",
        'light-200': "#FAFAF8",
        'light-300': "#F3F2EF",
        'light-400': "#E9E7E2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Rajdhani", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        // Light luxury shadows (soft ambient)
        'ambient': "0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)",
        'ambient-hover': "0 1px 3px rgba(0, 0, 0, 0.05), 0 12px 32px rgba(0, 0, 0, 0.08)",
        'glow-amber': "0 0 24px rgba(246, 162, 26, 0.15), 0 0 48px rgba(246, 162, 26, 0.08)",
        'glow-yellow': "0 0 24px rgba(255, 210, 84, 0.2), 0 0 48px rgba(255, 210, 84, 0.1)",
        'luxury': "0 20px 60px -15px rgba(0, 0, 0, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.06)",
        'luxury-sm': "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        'inner-glow': "inset 0 0 20px rgba(246, 162, 26, 0.06)",
        'inner-subtle': "inset 0 1px 3px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        // Cinematic animations
        'gradient-shift': "gradientShift 8s ease-in-out infinite",
        'breathe': "breathe 4s ease-in-out infinite",
        'float': "float 6s ease-in-out infinite",
        'pulse-glow': "pulseGlow 3s ease-in-out infinite",
        'slide-up': "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        'slide-in': "slideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        'fade-in': "fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        breathe: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.02)',
            opacity: '0.95',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(246, 162, 26, 0.15)',
          },
          '50%': {
            boxShadow: '0 0 32px rgba(246, 162, 26, 0.25), 0 0 48px rgba(255, 210, 84, 0.15)',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
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
