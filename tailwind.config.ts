import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/brandcomponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/uicomponent/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "radial-gradient":
          "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      colors: {
        brand: {
          primary: "#122B59",
          secondary: "#FFB700",
          accent: "#F39C12",
          // Add more brand colors as needed
        },
      },
      classes: {
        glass: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        },
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing:
          "typing 4s steps(20) infinite  alternate, ease-out blink .7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
