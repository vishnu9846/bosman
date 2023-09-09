/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily : {
      'clash' : ['Clash Grotesk', 'sans-serif'],
      'montserrat' : ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#DEB99E',
        'text-color': '#0D0D0D',
        'text-secondary': '#fff',
      },
     screens:{
      '3xl':{'max':'1280px'},
      '2xl':{'max':'1024px'},
      'tab':{'max':'768px'},
      'mobile':{'max':'640px'},
     }
    },
  },
  plugins: [],
}

