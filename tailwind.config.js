/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#2B2B2B",
        footer: "#3B3B3B",
        popular: "#A259FF",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      fontSize: {
        medium: "17px",
      },
    },
  },
  plugins: [],
};
