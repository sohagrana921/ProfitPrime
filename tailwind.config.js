/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3e6eb2",

          "secondary": "#ad245b",

          "accent": "#badb46",

          "neutral": "#1d1e2a",

          "base-100": "#f9f9fb",

          "info": "#40b8e7",

          "success": "#186741",

          "warning": "#f4cd4e",

          "error": "#f14660",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
