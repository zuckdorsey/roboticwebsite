/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'polibatam': {
          'orange': '#EB6D11',
          'peach': '#FDD7BB',      // illustration rectangle
          'light': '#F9ECE3',       // background
          'circle': '#D8DADD',      // grey circle
          'navy': '#1E293B',        // headline text
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
