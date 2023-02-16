/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
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
      ubuntu: ['Ubuntu', 'sans-serif'],
      droid: ['Droid Sans', 'sans-serif'],
      gentium: ['Gentium Book Plus', 'serif'], 
      mulish: ['Mulish', 'sans-serif'], 
      raleway: ['Raleway', 'sans-serif'],
      podkova: ['Podkova', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}
