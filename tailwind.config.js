/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          /* doc: https://daisyui.com/theme-generator/ */
          primary: '#4051b7',
          secondary: '#4051FF',
          accent: "#3D4451",
          neutral: "#000000",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}