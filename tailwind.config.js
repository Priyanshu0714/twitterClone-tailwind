/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: {
        '100px': '100px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

