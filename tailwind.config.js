/** @type {import('tailwindcss')",.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",

        "gradient-from": "hsl(6, 100%, 80%)",
        "gradient-to": "hsl(335, 100%, 65%)",
      },
      screens: {
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
