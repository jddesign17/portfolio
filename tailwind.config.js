/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/*{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors:{

        'primary':'#693EE7',
        'light':'#F4F5FF',
        'dark':'#1D1F20',
        'second':'#FFFFFF',
        'gray':'#D3D3D3',
        'dark-gray':'#5a5a5c'
      },
    },
  },
  plugins: [],
}