/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        border: '#2a2a2a',
        line: '#404040',
        subtle: '#a8a8a8',
        secondary: '#c4c4c4',
        primary: '#f5f5f5',
        white: '#ffffff',
      },
      letterSpacing: {
        widest2: '0.15em',
      }
    },
  },
  plugins: [],
}
