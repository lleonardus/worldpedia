/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "hsl(var(--color-text) / <alpha-value>)",
      input: "hsl(var(--color-input) / <alpha-value>)",
      background: "hsl(var(--color-background) / <alpha-value>)",
      elements: "hsl(var(--color-elements) / <alpha-value>)",
      white: "#FFF",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: "Nunito Sans, sans-serif",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
