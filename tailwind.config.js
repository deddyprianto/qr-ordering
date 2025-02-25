/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        gridSkeletonSearch: "150px 1fr",
      },
    },
  },
  plugins: [],
};