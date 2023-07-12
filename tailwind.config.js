/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "#e0e3ff",
          300: "#BCF266",
          700: "#90E900",
        },
        neutral: {
          500: "#1E2A37",
          600: "#172029",
        },
        secondary: "#8b5cf6",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
