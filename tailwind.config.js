/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/javascript/*.js', '*.html'],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        inter: ['Inter', 'Arial' ,'sans-serif']
      }
    },
  },
  plugins: [],
}

