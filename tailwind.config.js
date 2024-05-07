/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dash_blue_light: "#1A508B",
        dash_blue_dark: "#0D335D",
        dash_pink_light: "#C1A1D3",
        dash_white_light: "#f1f2f6",
        dash_white_dark: "#ffffff",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
