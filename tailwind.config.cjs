/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    screens: {
    },
    colors: {
      'dark-grey': '#202020',
      'beige': '#F7F2EC',
      'yellow': '#FFDA8A',
      'light-yellow': '#ffeabd',
      'red': '#ffa08a',
      'purple': '#B98AFF',
    },
    fontFamily: {
      gentium: ['Gentium Book Plus', 'serif'], 
      mulish: ['Mulish', 'sans-serif'], 
      raleway: ['Raleway', 'sans-serif'],
      podkova: ['Podkova', 'serif'],
    },
    extend: {
      borderColor: {
        'danger': '#ffeabd',
      },
    }
  },
  plugins: [],
}
