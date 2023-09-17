/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'kumbh': ['Kumbh Sans', 'sans-serif'], // ex. font-sans font-kumbh
    },
    extend: {
      colors: {
        'primary': 'hsl(26, 100%, 55%)',
        'primary-light': 'hsl(25, 100%, 60%)',
        'secondary': 'hsl(25, 100%, 94%)',
        'gray-100': 'hsl(223, 64%, 98%)',
        'gray-200': 'hsl(220, 14%, 75%)',
        'gray-300': 'hsl(219, 9%, 45%)',
        'gray-400': 'hsl(220, 13%, 13%)',
        'black': 'hsl(0, 0%, 0%)',
        'white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

