/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './customers/customers/*.liquid',
    './templates/*.liquids'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')
  ],
}

