import type { Config } from "tailwindcss";

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
      "special-headline": "clamp(6rem, 10vw + 1rem, 10rem)",
      headline: "clamp(3rem, 5vw + 1rem, 5rem)",
      subheadline: "clamp(2.25rem, 3vw + 1rem, 3rem)",
      title: "clamp(1.85rem, 2vw + 1rem, 2.15rem)",
      regular: "clamp(.94rem, 1.5vw + 1rem, 1rem)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#020617",
        "secondary-lighter": "#FAFAFA",
        secondary: "#DFDFDF",
        faded: "#BFBFBF",
      },
      fontFamily: {
        "start-2p": ["var(--font-start-2p)"],
        "jersey-10": ["var(--font-jersey-10)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
export default config;
