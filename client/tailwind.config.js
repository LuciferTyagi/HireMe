/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['ClashDisplay-Regular', 'sans-serif'],
        indie: ['Indie Flower', 'serif'],
        pacifico: ['Pacifico', 'serif'],
        tajawal: ['Tajawal', 'serif'],
      },
    },
  },
  plugins: [],
}