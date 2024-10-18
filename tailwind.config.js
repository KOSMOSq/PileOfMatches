/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ['"Silkscreen"', "cursive"]
      },
      keyframes: {
        flyAndFall: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(40px, -100px) rotate(45deg)" },
          "50%": { transform: "translate(150px, -80px) rotate(90deg)" },
          "75%": { transform: "translate(400px, 200px) rotate(180deg)" },
          "100%": { transform: "translate(700px, 500px) rotate(360deg)" }
        },
        flyAndFallLeft: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-40px, -100px) rotate(-45deg)" },
          "50%": { transform: "translate(-150px, -80px) rotate(-90deg)" },
          "75%": { transform: "translate(-400px, 200px) rotate(-180deg)" },
          "100%": { transform: "translate(-700px, 500px) rotate(-360deg)" }
        }
      },
      animation: {
        flyAndFall: "flyAndFall .8s linear forwards",
        flyAndFallLeft: "flyAndFallLeft .8s linear forwards"
      }
    }
  },
  plugins: []
};
