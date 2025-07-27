/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // adjust paths as needed
  theme: {
    extend: {
      fontFamily: {
        "jet-brains": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
