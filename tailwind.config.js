/** @type {import('tailwindcss').Config} */

/*
 * Strict light palette built from four distinct pale tints rather than shades
 * of white, so no surface ever sits white-on-white: a warm sand page, ivory
 * cards, a pale-sky mat behind artwork, and pale-sage result strips. Accents
 * are blue, red (danger), and green (safe/success). `theme.colors` is replaced
 * rather than extended, so slate/amber/emerald/etc. simply do not exist as
 * utilities any more. These values mirror the exact tokens used inline in
 * every public/sims/*.html file.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',

      /* Surfaces, borders and body copy. */
      paper: '#EDE7DC',
      panel: '#FFFCF6',
      scene: '#D8E3EC',
      canvas: '#FBF9F4',
      strip: '#E7EFE3',
      inert: '#DCD5C7',
      ink: '#1A1A1A',
      dim: '#5E5A52',
      border: '#D6CEBF',

      red: '#D2443D',
      blue: '#2B6CD4',
      green: '#2E7D5B',
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
        glow: '0 0 0 1px rgb(43 108 212 / 0.35), 0 18px 50px -12px rgb(43 108 212 / 0.28)',
        card: '0 1px 2px rgb(94 90 82 / 0.06), 0 10px 24px -16px rgb(94 90 82 / 0.35)',
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
