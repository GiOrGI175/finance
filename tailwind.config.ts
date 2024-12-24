import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        publicSans: ["PublicSans", "serif"],
      },
      transitionDuration: {
        "8000": "8000ms",
      },
      transitionDelay: {
        "400": "400ms",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
export default config;
