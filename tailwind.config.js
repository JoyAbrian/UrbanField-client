/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        KronaOne: ['Krona One', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        DM_Sans: ['DM Sans', 'sans-serif'],
        Nunito_Sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

