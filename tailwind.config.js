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
        'wedding-raised': '0 16px 40px -4px rgba(38, 50, 45, 0.12), 0 6px 16px -2px rgba(38, 50, 45, 0.06)',
        'glow-accent': '0 0 35px -5px rgba(52, 87, 68, 0.45)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
