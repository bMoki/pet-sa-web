/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F15156"
      },
      fontFamily: {

        nunito: ["Nunito"]
      }
    },
  },
  plugins: [],
}

