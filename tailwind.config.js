/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  Plugins: [],
  theme: {
    extend: {
      spacing: {
        '700': '700px', 
        '500': '500px', 
        '420': '420px', 
        '450': '450px', 
        '300': '300px', 
        '200': '200px', 
      },
    },
    colors: {
      info: '#2D2D32',
      black: '#000000',
      white: '#FFFFFF',
      label: '#005E51',
      icon: '#F8FCFA',
      warning: '#FF8F15',
      green: '#18A54B',
      grey: '#CCCCCC',

    },
    backgroundImage: {
      'animate': "url('../public/images/animate.png')",
      'animate-hero': "url('../public/images/animate-hero.png')",
    },
  }
}
  