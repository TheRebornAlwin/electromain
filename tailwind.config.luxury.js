// ElectroMain Luxury Design System — Tailwind Config Extension
// Add these to your existing tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // BRAND COLORS (warm yellow → amber → deep orange)
      colors: {
        brand: {
          400: '#FFD24D', // light gold
          500: '#FEC130', // core gold
          600: '#FFB012', // amber
          700: '#FF8A00', // deep amber-orange
        },
        ink: {
          900: '#0E0F12', // primary text
          800: '#14161A', // headings
          700: '#2A2D33', // subheadings
          600: '#3A3F47', // muted
          500: '#646B76', // helper text
        },
        surface: {
          DEFAULT: '#FFFFFF', // base
          tint: '#F6F7F9',    // alternating rows
        },
        // State colors (NO RED)
        state: {
          info: 'rgb(254 193 48 / 0.08)',
          success: 'rgb(16 185 129 / 0.10)',
          warning: 'rgb(255 180 18 / 0.12)',
          error: 'rgb(100 116 139 / 0.08)', // neutral + amber label
        },
      },

      // SHADOWS (luxury elevation)
      boxShadow: {
        card: '0 10px 30px rgba(10, 12, 15, 0.06)',
        float: '0 24px 60px rgba(10, 12, 15, 0.08)',
        ambient: '0 4px 16px rgba(10, 12, 15, 0.04)',
        'ambient-hover': '0 8px 24px rgba(10, 12, 15, 0.06)',
      },

      // BORDER RADIUS
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },

      // TYPOGRAPHY
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'], // Variable font preferred
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['56px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['40px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['30px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h4': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'micro': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },

      // ANIMATION TIMING
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)', // slow-out easing
      },

      transitionDuration: {
        '250': '250ms',
        '450': '450ms',
        '600': '600ms',
        '900': '900ms',
      },

      // SPACING (rhythm)
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
    },
  },

  // PLUGINS
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // Use .form-input, .form-select, etc.
    }),
  ],
};
