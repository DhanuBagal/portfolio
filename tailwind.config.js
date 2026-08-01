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
        techPrimary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: '#EEF2FF',
          dark: '#4338CA',
        },
        techCyan: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          light: '#E0F2FE',
        },
        techEmerald: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#ECFDF5',
        },
        techDark: {
          bg: '#0B0F17',
          card: '#161E2E',
          border: '#242F42',
          muted: '#94A3B8',
        },
        techLight: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'tech': '0 4px 20px -2px rgba(99, 102, 241, 0.15), 0 2px 6px -1px rgba(99, 102, 241, 0.08)',
        'tech-hover': '0 12px 28px -4px rgba(99, 102, 241, 0.25), 0 4px 12px -2px rgba(6, 182, 212, 0.15)',
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'indigo-glow': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
      }
    },
  },
  plugins: [],
}




