/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        checked: "url('./src/assets/check.svg')",
        checkedHover: "url('./src/assets/checkHover.svg')",
      },
    },
  },
  plugins: [],
};
