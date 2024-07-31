/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mobile: '350px',
      // // => @media (min-width: 640px) { ... }

      // tablet: '640px',
      // // => @media (min-width: 640px) { ... }

      // laptop: '1024px',
      // // => @media (min-width: 1024px) { ... }

      // desktop: '1280px',
      // // => @media (min-width: 1280px) { ... }
      // mobile: { min: '250px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "250px", max: "1236px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      laptop: { min: "1237px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      desktop: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
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
