/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877F2',
        'gray-facebook': '#F0F2F5',
        'green-facebook': '#42B729',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
        '90%': '90%',
      }
    },
  },
  plugins: [],
}

