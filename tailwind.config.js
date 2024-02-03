/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CC932D',
        'secondary': '#57A68F',
      },
      spacing: {
        'nav': '5rem',
      }
    },
  },
  plugins: [],
};
