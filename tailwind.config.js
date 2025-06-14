const { sourceMapsEnabled } = require("node:process");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'], 
        source: ['Source Sans Pro', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
