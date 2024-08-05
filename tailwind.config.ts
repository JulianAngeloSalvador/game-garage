import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      DEFAULT: "300",
      semibold: "400",
      bold: "500",
      extrabold: "700",
    },
    fontSize: {
      "special-headline": "clamp(7rem, 16vw + 1rem, 14rem)",
      headline: "clamp(3rem, 5vw + 1rem, 5rem)",
      subheadline: "clamp(2rem, 3vw + 1rem, 3rem)",
      title: "clamp(1.85rem, 2vw + 1rem, 2.15rem)",
      regular: "clamp(1rem, 1.5vw + 1rem, 1.215rem)",
    },
    transitionDuration: {
      fast: ".25s",
      medium: ".5s",
      slow: ".75s",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#020617",
        "primary-light": " #030a25",
        "primary-dark": " #010209",
        "secondary-dark": "#595959",
        "secondary-lighter": "#FAFAFA",
        white: "#ffffff",
        secondary: "#DFDFDF",
        faded: "#BFBFBF",
      },
      fontFamily: {
        "jersey-10": ["var(--font-jersey-10)"],
        "dm-sans": ["var(--font-dm-sans)"],
        bungee: ["var(--font-bungee)"],
        urbanist: ["var(--font-urbanist)"],
      },
      boxShadow: {
        "primary-neumorphy-outer":
          "5px 5px 10px theme(colors.primary-dark), -5px -5px 10px theme(colors.primary-light)",
        "primary-neumorphy-inner":
          "inset 5px 5px 10px theme(colors.primary-dark), inset -5px -5px 10px theme(colors.primary-light)",
        "secondary-neumorphy-outer":
          "5px 5px 10px theme(colors.secondary-dark), -5px -5px 10px theme(colors.white)",
        "secondary-neumorphy-inner":
          "inset 5px 5px 10px theme(colors.secondary-dark), inset -5px -5px 10px theme(colors.white)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        leaning: "0 0px 40px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
