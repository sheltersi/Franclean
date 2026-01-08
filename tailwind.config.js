/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
   "./src/data/**/*.{js,jsx,ts,tsx}",
  "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
    colors: {
         surface: {
        main: "#e5e1ee",   // lavender
        card: "#dffdff",   // light cyan
      },
      brand: {
        primary: "#880d1e",   // aquamarine 880d1e
        secondary: "#90bede", // powder blue
        accent: "#90f3ff",    // electric aqua
        dark: "#14453d",      // anchor (nav/footer)
      },
      text: {
        main: "#1f2937",   // slate-800
        muted: "#6b7280",  // slate-500
      },
},
      
      },
  },
}
