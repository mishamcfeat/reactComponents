/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./comps/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css,scss,less}", // corrected typo here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
