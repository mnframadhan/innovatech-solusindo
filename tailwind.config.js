/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue' : "#0762c8",
        'secondary-blue': "#073ec8",
        'tertiary-blue' : "#0784c8",
        'queternary-blue': "#07bec8",
        'secondary-white' : "#edf1ff",
        'tertiary-white': "#e1faf6",
      }
    },
  },
  plugins: [],
}