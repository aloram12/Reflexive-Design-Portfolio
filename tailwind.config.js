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
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

