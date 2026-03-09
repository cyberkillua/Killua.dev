/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: '#FACC15',
        bg: '#FAFAF9',
        ink: '#0A0A0A',
        tag: '#F4F4F5',
      },
      boxShadow: {
        neo: '4px 4px 0px #0A0A0A',
        'neo-lg': '6px 6px 0px #0A0A0A',
        'neo-sm': '2px 2px 0px #0A0A0A',
      },
    },
  },
  plugins: [],
};
