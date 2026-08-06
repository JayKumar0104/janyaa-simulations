/** @type {import('tailwindcss').Config} */

/*
 * Strict light palette: paper/panel surfaces with dark ink text, and a single
 * blue accent (plus red, reserved for danger/alert states). `theme.colors` is
 * replaced rather than extended, so slate/amber/emerald/etc. simply do not
 * exist as utilities any more. These values mirror the exact tokens used
 * inline in every public/sims/*.html file.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',

      /* Backgrounds, borders and body copy. */
      paper: '#F5F5F4',
      panel: '#FFFFFF',
      ink: '#1A1A1A',
      dim: '#6B6B6B',
      border: '#E3E3E1',

      red: '#E0453E',
      blue: '#2B6CD4',
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
