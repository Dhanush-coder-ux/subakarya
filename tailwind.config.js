/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "quicksand-light": ["Quicksand-Light"],
        "quicksand-regular": ["Quicksand-Regular"],
        "quicksand-medium": ["Quicksand-Medium"],
        "quicksand-semibold": ["Quicksand-SemiBold"],
        "quicksand-bold": ["Quicksand-Bold"],
      },

      colors: {
        primary: "#F4B400",       // Haldi Yellow
        primarySoft: "#FFE8A3",   // Soft Yellow
        secondary: "#B71C1C",     // Kumkum Red
        background: "#FFFDF8",    // Traditional White
        surface: "#FFFFFF",
        textPrimary: "#3A2E1F",
        textSecondary: "#6B5E4B",
        border: "#E6DCCF",
      },
    },
  },
  plugins: [],
};
