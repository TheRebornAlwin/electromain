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
        // Industrial-Luxury Palette
        'brand-red': "#C31919",        // Primary red - power, precision
        'brand-orange': "#F28C00",     // Amber accent - warmth, energy
        'brand-gradient': "#E24E1C",   // Gradient midpoint
        'charcoal': "#2B2B2B",         // Deep charcoal - sophistication
        'background': "#0F0F0F",       // Near-black background
        'off-white': "#F4F4F4",        // Soft white text

        // Semantic mappings
        primary: "#F28C00",            // Orange
        secondary: "#C31919",          // Red
        accent: "#E24E1C",             // Gradient midpoint
        foreground: "#F4F4F4",         // Off-white
        muted: "#8A8A8A",              // Mid-gray
        'muted-foreground': "#6A6A6A", // Darker gray
        border: "#2B2B2B",             // Charcoal
        ring: "#F28C00",               // Orange ring

        // Utility shades
        'dark-100': "#0F0F0F",
        'dark-200': "#1A1A1A",
        'dark-300': "#2B2B2B",
        'dark-400': "#3F3F3F",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Rajdhani", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        // Cinematic luxury shadows
        'glow-red': "0 0 40px rgba(195, 25, 25, 0.3), 0 0 80px rgba(195, 25, 25, 0.15)",
        'glow-orange': "0 0 40px rgba(242, 140, 0, 0.3), 0 0 80px rgba(242, 140, 0, 0.15)",
        'glow-gradient': "0 0 40px rgba(226, 78, 28, 0.4), 0 0 80px rgba(226, 78, 28, 0.2)",
        'luxury': "0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 10px 20px -10px rgba(0, 0, 0, 0.4)",
        'luxury-sm': "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
        'inner-glow': "inset 0 0 20px rgba(242, 140, 0, 0.1)",
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
            boxShadow: '0 0 20px rgba(242, 140, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(242, 140, 0, 0.4), 0 0 60px rgba(195, 25, 25, 0.2)',
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
