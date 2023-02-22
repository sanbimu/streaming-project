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
      'beige': '#f7f2ec',
      'yellow': '#ffda8a',
      'light-yellow': '#ffeabd',
      'red': '#ffa08a',
      'purple': '#b98aff',
      'orange': '#eb6c4a'
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
