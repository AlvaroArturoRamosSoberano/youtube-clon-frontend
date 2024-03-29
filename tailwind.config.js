/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", " sans-serif"]
      },
      colors: {
        cod: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#0f0f0f"
        },
        masala: {
          50: "#f6f5f6",
          100: "#e7e6e7",
          200: "#d1d0d1",
          300: "#b0afb1",
          400: "#888789",
          500: "#6d6c6e",
          600: "#5d5c5e",
          700: "#504e50",
          800: "#464446",
          900: "#403f40",
          950: "#262626"
        }
      }
    }
  },
  plugins: []
};
