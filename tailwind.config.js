const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "hsl(233, 47%, 7%)",
          200: "hsl(244, 38%, 16%)",
        },
        violet: "hsl(277, 64%, 61%)",
        semiwhite: {
          100: "hsla(0, 0%, 100%, 0.75)",
          200: "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontSize: {
        base: "0.9375rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif", ...fontFamily.sans],
        lexend: ["'Lexend Deca'", "sans-serif", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
