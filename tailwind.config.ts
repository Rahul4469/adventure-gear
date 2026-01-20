// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
      },

      colors: {
        summit: {
          charcoal: "#1C1C1A",
          stone: "#2A2A28",
          ash: "#3D3D3D",
          mist: "#8B8B7A",
          cream: "#E8E4DD",
        },

        ember: {
          DEFAULT: "#D2691E",
          50: "#FDF4ED",
          100: "#FAE5D4",
          200: "#F5C9A8",
          300: "#EEA76D",
          400: "#E67F32",
          500: "#D2691E",
          600: "#B85A1A",
          700: "#8F4615",
          800: "#6B3512",
          900: "#4A250D",
          950: "#2D1608",
        },

        forest: {
          DEFAULT: "#2D5016",
          50: "#F0F5EB",
          100: "#DEEBD0",
          200: "#BDD7A1",
          300: "#96BE6B",
          400: "#6E9E3E",
          500: "#4E7B25",
          600: "#2D5016",
          700: "#234010",
          800: "#1A300C",
          900: "#112008",
          950: "#091004",
        },
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      letterSpacing: {
        tactical: "0.2em",
        "wide-tactical": "0.3em",
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },

      borderRadius: {
        sm: "2px",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        "glow-ember": "0 0 20px rgba(210, 105, 30, 0.3)",
        "glow-ember-lg": "0 0 40px rgba(210, 105, 30, 0.4)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "topo-pattern": `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' fill='none' stroke='%23E8E4DD' stroke-width='0.5'/%3E%3C/svg%3E")`,
      },
    },
  },

  plugins: [],
};

export default config;
