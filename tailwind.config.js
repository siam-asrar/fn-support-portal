/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        resaleProductsTheme: {
          /* doc: https://daisyui.com/theme-generator/ */
          primary: '#ff2400',
          secondary: '#40e0d0',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#36454f"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
