/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        red: "hsl(0, 100%, 74%) ",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        dark_blue: "hsl(249, 10%, 26%)",
        grayish_blue: "hsl(246, 25%, 77%)"
      }
    },
  },
  plugins: [],
}