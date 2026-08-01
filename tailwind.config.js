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
        roseCharcoal: {
          bg: '#FAF7F7',
          primary: '#D98F9D',
          primaryHover: '#C77D8B',
          secondary: '#2F3640',
          text: '#222222',
          card: '#FFFFFF',
          accent: '#F2D5DA',
          accentText: '#8B3B4A',
          border: '#EFE4E6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'rose': '0 4px 20px -2px rgba(217, 143, 157, 0.18), 0 2px 6px -1px rgba(217, 143, 157, 0.1)',
        'rose-hover': '0 12px 28px -4px rgba(217, 143, 157, 0.22), 0 4px 12px -2px rgba(217, 143, 157, 0.12)',
      }
    },
  },
  plugins: [],
}




