module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    mode : "jit",
    purge : [".\\index.html"],
    colors :{
      primary:{
        50 : "#ffffff",
        100 : "#f1f8f6",
        200 : "#DCFADF",
        300 : "#d4e9e2",
        350 : "#019f59",
        400 : "#008248",
        500 : "#1e3932",
        550 : "#686b62",
        600 : "#000000"
      },
      golden: {
        1 : "#D1BF1B",
        2 : "#f3f1e7"
      }
    },
    extend: {
      backgroundImage: theme =>({
        "Hero_Image": "url('..\\Image\\Hero-Image-XL.png')",
        "Mobile_Hero_Image" : "url('..\\Image\\hero-mobile.png')"
      }),

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
