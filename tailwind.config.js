// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {
            background: "#15141a",
            primary: {
              50: "#FC5D1B",
              100: "#e35418",
              200: "#ca4a16",
              300: "#b04113",
              400: "#973810",
              500: "#7e2f0e",
              600: "#65250b",
              700: "#4c1c08",
              800: "#321305",
              900: "#fc5d1b",
              DEFAULT: "#e35418",
              foreground: "#f9f9f9",
            },
            secondary: {
              50: "#f9f9f9",
              100: "#e0e0e0",
              200: "#c7c7c7",
              300: "#aeaeae",
              400: "#959595",
              500: "#7d7d7d",
              600: "#646464",
              700: "#4b4b4b",
              800: "#323232",
              DEFAULT: "#f9f9f9",
              foreground: "#f9f9f9",
            },
          },
        },
      },
    }),
  ],
};
