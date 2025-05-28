/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      colors: {
        customTeal: "#054252",
        darkNavy: "#03192B",
      },
    },
  },
  plugins: [],
};
