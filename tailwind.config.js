const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': colors.slate[500],
        'success': colors.emerald[500],
        'danger': colors.red[500],
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(primary|success|danger|slate)/
  }]
}

