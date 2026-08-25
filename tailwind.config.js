module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1023",
        purple: "#8B5CF6",
        cyan: "#22D3EE",
        blue: "#3B82F6",
        pink: "#EC4899",
        text: "#F8FAFC",
        secondary: "#94A3B8"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
