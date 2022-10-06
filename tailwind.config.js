/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue': '#476FFE',
      'green': '#06EDB1',
      'yellow': '#FCD100',
      'blue-light': '#F3F6FF'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}

