/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
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
