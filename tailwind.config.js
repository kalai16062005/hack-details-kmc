/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark blue-ku bathila white background set pandrom
        lightBg: "#ffffff", 
        // Tarcin logo-la irukura athe professional blue
        tarcinBlue: "#004aad", 
        // Card background-ai transparent dark-la irunthu light gray-ku mathurom
        lightCard: "rgba(0, 0, 0, 0.03)",
        // Text-kaga oru dark gray
        darkText: "#1a1a1a",
      },
    },
  },
  plugins: [],
}