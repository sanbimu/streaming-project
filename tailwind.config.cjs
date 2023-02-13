/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark-dray': '#202020',
      'beige': '#F7F2EC',
      'yellow': '#FFDA8A',
      'light-yellow': '#ffeabd',
      'red': '##ffa08a',
      'purple': '##B98AFF',
    },
    fontFamily: {
      ubuntu: ['ubuntu', 'sans-serif'],
      circe: ['circe', 'sans-serif'],
      circeRounded: ['circe-rounded', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}
