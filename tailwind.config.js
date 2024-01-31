/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["19.5px", "16px"],
      lg: ["18px", "21px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "29px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        primary: "ECEEFF",
      },
    },
  },
  plugins: [],
};
