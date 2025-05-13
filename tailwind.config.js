/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}", "./Pages/**/*.html"],
  safelist: [
    {
      pattern: /bg-\[position:.*\]/,
    },
    {
      pattern: /bg-\[length:.*\]/,
    },
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
