/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Darker blue-gray for high contrast with white text
        secondary: "#f97316", // Bright orange for accents
        secondaryHover: "#d96112", // Darker orange for hover states
      },
    },
  },
  plugins: [],
};
