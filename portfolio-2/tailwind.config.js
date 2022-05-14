module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1769E0',
        'green-blue': '#073042',
        'light-blue': '#D7EFFE',
        'green': '#3DDC84',
        'blue': '#4285F4',
        'cream': '#90e0ef',
        'chip-blue': '#D7EFFE',
      }
    },
    fontFamily:{
      'quick': ['Quicksand', 'sans-serif'],
      'glyph': ['Staatliches', 'cursive']
    },
    fontSize: {
      'xl': ['96px'],
      'lg': ['50px'],
      'xml': ['38px'],
      'md-lg': ['25px'],
      'md': ['18px'],
      'sm': ['15px'],
      'xs': ['12px']
    }
  },
  plugins: [],
}
