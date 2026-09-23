/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FAFAF6',
          soft: '#F0F2EC',
          raised: '#FEFEFB',
        },
        wedding: {
          text: '#26322D',
          muted: '#59645E',
          line: '#D8DED5',
          border: '#7C897F',
        },
        accent: {
          DEFAULT: '#345744',
          hover: '#294737',
          light: '#EAF0EB',
          subtle: 'rgba(52, 87, 68, 0.08)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'wedding-card': '0 4px 20px -2px rgba(38, 50, 45, 0.05), 0 2px 6px -1px rgba(38, 50, 45, 0.03)',
        'wedding-raised': '0 12px 32px -4px rgba(38, 50, 45, 0.08), 0 4px 12px -2px rgba(38, 50, 45, 0.04)',
      },
    },
  },
  plugins: [],
}
