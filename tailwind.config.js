/** @type {import('tailwindcss').Config} */

/*
 * Fresh light palette built around soft surfaces with orange, muted green,
 * and light-blue accents, rather than shades of white, so no surface ever
 * sits white-on-white: a pale-green page, pure-white cards, a light-blue mat
 * behind artwork, and soft-orange result strips. Accents are orange
 * (buttons/active states), a muted sage green (borders/positive highlights),
 * and red (danger) — kept deliberately low-saturation so nothing reads as
 * neon. `theme.colors` is replaced rather than extended, so slate/amber/
 * emerald/etc. simply do not exist as utilities any more. These values
 * mirror the exact tokens used inline in every public/sims/*.html file.
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
      paper: '#F0FDF4',
      panel: '#FFFFFF',
      scene: '#DBEAFE',
      canvas: '#FFFFFF',
      strip: '#FFEDD5',
      inert: '#E5E7EB',
      ink: '#111827',
      dim: '#4B5563',
      border: '#DCFCE7',

      red: '#DC2626',
      orange: '#EA580C',
      green: '#4F7E63',
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
        glow: '0 0 0 1px rgb(234 88 12 / 0.35), 0 18px 50px -12px rgb(234 88 12 / 0.28)',
        card: '0 1px 2px rgb(75 85 99 / 0.06), 0 10px 24px -16px rgb(75 85 99 / 0.35)',
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
