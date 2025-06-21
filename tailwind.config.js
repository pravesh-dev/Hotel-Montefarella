/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C09569',
      },
      fontFamily: {
        bellefair: [`bellefair`],
        poppins: [`poppins`],
        mulish: [`mulish`]
      }
    },
  },
  plugins: [],
}
