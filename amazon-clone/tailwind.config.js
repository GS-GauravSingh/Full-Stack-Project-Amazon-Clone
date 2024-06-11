/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-primary-bgcolor" : "#131921",
        "header-secondary-bgcolor" : "#222F3E",
        "back-to-top-bgcolor" : "#485769",
        "footer-secondary-bgcolor" : "#232F3E",
        "footer-primary-bgcolor" : "#131A22",
      },

      screens: {
        "customBreakpointForMobileHeader": "1024px",
        "customBreakpointForFooter": "798px"
      },

      boxShadow:{
        "signUpInputBoxShadow": "0px 0px 5px #007185"
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

