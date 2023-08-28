/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c4eafc",

          "secondary": "#11ad28",

          "accent": "#ffafd6",

          "neutral": "#161c23",

          "base-100": "#f5f8fa",

          "info": "#8ca7de",

          "success": "#0d5e57",

          "warning": "#c66f0c",

          "error": "#ef527c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
