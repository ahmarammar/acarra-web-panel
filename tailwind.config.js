/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "full-blue": "#1E21FF",
        "btn-gray": "#EDF2F7",
        "paid-check": "#51BC6D",
        "onetime-check": "#EEEEEE",
        "grayish-white": "#D3DEE9",
        "header-bg": "#262626",
        "text-color": "#262626",
        "unpaid-check": "#FF705C",
        "cancel-btn": "#E53E3E",
      },
    },
    plugins: [],
  }
}
