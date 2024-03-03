/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '65rem' : '65rem',
        '43rem' : '43rem',
        '35rem' : '35rem',
        '62.5rem' : '62.5rem',
        '45rem' : '45rem'
     

      },
      spacing: {
        '43rem' : '43rem',
      },
      colors:{
        '#94C9D8' : "94C9D8",
        '#F7813C' : '#F7813C',
        '#D9D9D9' : '#D9D9D9',
        
      },
      borderRadius: {
        '35px' : '35px',
        '60px' : '60px',
        '15px' : '15px'
      },
    },
  },
  plugins: [],
});
