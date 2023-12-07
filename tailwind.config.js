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
            foreground: "#f9f9f9",
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
            // "text-primary": "#f9f9f9",
          },
        },
      },
    }),
  ],
};
