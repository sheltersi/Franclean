/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          orange: "#F97316",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
