/** @type {import('tailwindcss').Config} */

/*
 * Strict three-colour palette: black/dark grey surfaces (`ink`), with green and
 * orange as the only accents. `theme.colors` is replaced rather than extended,
 * so slate/amber/etc. simply do not exist as utilities any more.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',

      /* Backgrounds, borders and body copy: black through light grey. */
      ink: {
        950: '#000000',
        900: '#080808',
        800: '#141414',
        700: '#232323',
        600: '#3a3a3a',
        500: '#585858',
        400: '#8b8b8b',
        300: '#b4b4b4',
        200: '#d5d5d5',
        100: '#ededed',
      },

      green: {
        900: '#052e16',
        700: '#15803d',
        600: '#16a34a',
        500: '#22c55e',
        400: '#4ade80',
        300: '#86efac',
      },

      orange: {
        900: '#431407',
        700: '#c2410c',
        600: '#ea580c',
        500: '#f97316',
        400: '#fb923c',
        300: '#fdba74',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(34 197 94 / 0.35), 0 18px 50px -12px rgb(34 197 94 / 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.2s ease-out both',
      },
    },
  },
  plugins: [],
}
