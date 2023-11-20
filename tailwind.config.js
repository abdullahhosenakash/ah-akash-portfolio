/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#1e293b',
          secondary: '#facc15',
          accent: '#60a5fa'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
