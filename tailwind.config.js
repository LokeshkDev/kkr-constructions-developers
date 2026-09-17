/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#008A3C",
          darkGreen: "#006C2E",
          lightGreen: "#E8F6ED",
          blue: "#004797",
          darkBlue: "#00326B",
          lightBlue: "#EAF2FC",
          gold: "#F3A200",
          darkGold: "#C88300",
          lightGold: "#FFF8E6",
          charcoal: "#0A1118",
          darkSlate: "#121C27",
          offWhite: "#F6F9F7",
          border: "#E1E9E4",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 138, 60, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
