const tailWindcolors =  require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    mode : "jit",
    purge : [".\\index.html"],
    colors :{

      black : tailWindcolors.black,
      white : tailWindcolors.white,
      gray : tailWindcolors.gray,

      primary:{
        "lightest" : "#f1f8f6",
        "light" : "#d4e9e2",
        "dark" : "#008248",
        "darkest" : "#1e3932",
      },

      golden: {
        "dark" : "#D1BF1B",
        "light" : "#f3f1e7"
      }
    },

    extend: {
      backgroundImage: theme =>({
        "Hero_Image": "url('..\\Image\\Hero-Image-XL.png')",
        "Mobile_Hero_Image" : "url('..\\Image\\hero-mobile.png')"
      }),

      borderWidth:{
        '1.1' : '1.1px'
      },

      backgroundPosition: {
        '1/2': '50%',
        '2/2.5': '40% 100%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
         'auto-75%' : 'auto 75%',
         'auto-50%': 'auto 50%',
       },

       padding :{
         '56.25%' :'56.25%',
         '133.33%' : '133.33%',
         '20%' : '20%'
       },

       margin :{
         '20%' : '20%',
         '30%' : '30%'
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
