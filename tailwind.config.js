/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: {
          DEFAULT: "#94B415",
          100: "#A9CD18",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          100: "#25292F",
        },
      },
      screens: {
        xl: "1370px",
        custom: "1780px",
      },
      borderRadius: {
        primary: "4px",
      },
    },
  },
  plugins: [],
};
