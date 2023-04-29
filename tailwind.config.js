/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--roboto-font)", ...fontFamily.sans],
      },
      backgroundColor: {
        primary: "#170F23",
        sidebar: "#221A2D",
        purple: "#9B4DE0",
        lightPurple: "#2F2739",
        lightGray: "#00000048",
        purpleLight: "#2F2739",
        grayPrimary: "#75707c",
      },
      color: {
        primary: "#170F23",
        sidebar: "#221A2D",
        purple: "#9B4DE0",
        lightPurple: "#2F2739",
        lightGray: "#00000048",
        purpleLight: "#2F2739",
        grayPrimary: "#75707c",
      },
      borderColor: {
        primary: "#170F23",
        sidebar: "#221A2D",
        purple: "#9B4DE0",
        lightPurple: "#2F2739",
        lightGray: "#00000048",
        purpleLight: "#2F2739",
        grayPrimary: "#75707c",
      },
    },
  },
  plugins: [],
};
