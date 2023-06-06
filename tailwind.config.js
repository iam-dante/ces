/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cesblue: {
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        cesgreen: {
          300: "#86efac",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      robot: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
