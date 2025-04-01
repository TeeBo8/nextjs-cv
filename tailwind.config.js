/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme") // Importe les polices par défaut

module.exports = {
  // darkMode: ["class"],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Ajout des familles de polices
      fontFamily: {
        // Applique Inter comme police par défaut (remplace 'sans')
        sans: ["var(--font-inter)", ...fontFamily.sans],
        // Crée une famille 'heading' pour Poppins
        heading: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} 