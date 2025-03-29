/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ocr: ["OCR-A-Std", "monospace"],
        ibm: ["IBM Plex Mono", "monospace"],
        mono: ["Inter", "serif"],
        code: ["SF-Mono", "monospace"],
      },
      letterSpacing: {
        tight: "-0.1em",
        word: "-0.12em",
      },
    },
  },
  plugins: [],
};
