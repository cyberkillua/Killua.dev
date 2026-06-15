/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        disp: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#FBF9F3',
        ink: '#1a1814',
        body: '#3a352c',
        muted: '#6b6557',
        rule: '#d8d2c4',
        red: '#9a3a1d',
      },
    },
  },
  plugins: [],
};
