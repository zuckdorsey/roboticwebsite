/* eslint-disable @typescript-eslint/no-require-imports */
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(navbar|button|card|chip|avatar|link|dropdown|menu|tabs|progress|accordion|modal|input|select).js",
  ],
  theme: {
    extend: {
      colors: {
        'polibatam': {
          'orange': '#EB6D11',
          'peach': '#FDD7BB',      // illustration rectangle
          'light': '#FFFFFF',       // background
          'circle': '#D8DADD',      // grey circle
          'navy': '#1E293B',        // headline text
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#EB6D11",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#1E293B",
              foreground: "#FFFFFF",
            },
            background: "#FFFFFF",
            foreground: "#1E293B",
            focus: "#EB6D11",
          },
        },
      },
    }),
  ],
}
