/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./src/assets/8736.jpg')",
        marble:
          "url('./src/assets/close-up-white-marble-texture-background.jpg')",
      },
    },
  },
  plugins: [],
};
