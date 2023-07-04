/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#1d1f2b',
        bgSecundary: '#252837',
        bgThird: '#303346',
        greenPrimary: '#3AD17B'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        sM: "890px",
        ms: "960px",
        md: "1060px",
        lg: "1200px",
        lG: "1300px",
        xl: "1500px",
      },
    },
  },
  plugins: [],
}

