/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Desert Dusk Earthy Palette
        earthPrimary: {
          DEFAULT: '#D4933A',   // Amber Gold - main accent
          hover: '#B07D2E',     // Ochre
          light: '#FEF3E2',     // Light amber tint
          dark: '#8C6020',      // Deep amber
        },
        earthRose: {
          DEFAULT: '#C47B6A',   // Dusty Rose - secondary accent
          hover: '#A85F50',
          light: '#FDF0E8',
        },
        earthDark: {
          bg: '#18120A',        // Dark Umber
          card: '#241A0F',      // Rich Brown
          border: '#3D2A14',    // Dark border
          muted: '#9A8060',     // Warm muted
        },
        earthLight: {
          bg: '#F2EAD8',        // Warm Parchment
          card: '#FDF6EC',      // Light cream card
          border: '#E8D5B0',    // Sand border
          muted: '#7A6040',     // Warm muted text
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'earth': '0 4px 20px -2px rgba(180, 120, 50, 0.15), 0 2px 6px -1px rgba(180, 120, 50, 0.08)',
        'earth-hover': '0 12px 28px -4px rgba(212, 147, 58, 0.30), 0 4px 12px -2px rgba(196, 123, 106, 0.18)',
        'amber-glow': '0 0 25px -5px rgba(212, 147, 58, 0.35)',
        'rose-glow': '0 0 25px -5px rgba(196, 123, 106, 0.3)',
      }
    },
  },
  plugins: [],
}
