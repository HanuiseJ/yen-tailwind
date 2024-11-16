module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E31C3D',   // Rouge vif
        dark: '#0D0203',      // Noir profond
        light: '#FFFAFA',     // Blanc cassé
        teal: '#003844',      // Bleu/vert foncé
        slate: '#465775',     // Bleu ardoise
      
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        display: ['Julius Sans One', 'sans-serif'],
      },
       
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}