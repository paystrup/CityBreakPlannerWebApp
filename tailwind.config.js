/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primaryRed': '#E70013',
      'primaryBlue': '#022B52',
      'black': '#000000',
      'primaryGray': {
        900: '#A1A8AD',
        500: '#CED2D3',
      },
      'secondaryBlue': {
        900: '#00587A',
        100: '#C3EBFF',
      }, 
      'secondaryGreen': {
        900 : '#007554',
        100 : '#A3EABF',
      }, 
      'secondaryYellow': {
        900 : '#DBA200', 
        100 : '#FFE882'
      },

      'secondaryBurgundy': '#9A0035',
      'secondaryPink' : '#FAC5CC',
      
    },
    extend: {
      fontFamily: {
        visitdk: ["VisitDenmark-Regular", "sans-serif"],
        visitdkMedium: ["VisitDenmark-Medium", "sans-serif"],
        visitdkSemiBold: ["VisitDenmark-SemiBold", "sans-serif"],
        visitdkExtraBold: ["VisitDenmark-ExtraBold", "sans-serif"],
        visitdkBold: ["VisitDenmark-Bold", "sans-serif"],
        visitdkOutlineMedium: ["VisitDenmark-Outline-Medium", "sans-serif"],
        visitdkOutlineRegular: ["VisitDenmark-Outline-Regular", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}