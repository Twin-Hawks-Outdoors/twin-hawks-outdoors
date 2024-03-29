import type { Config } from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald Variable", ...fontFamily.sans],
        serif: ["Quattrocento", ...fontFamily.serif],
      },
    },
    fontSize: {
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      xxl: "var(--font-size-xxl)",
      xxxl: "var(--font-size-xxxl)",
    },

    colors: {
      white: "#f2f2f2",
      black: "#262220",
      transparent: "transparent",
      current: "currentColor",
      cream: {
        50: "#FDFBF1",
        100: "#FDF9ED",
        200: "#FBF5E5",
        300: "#F8F2DD",
        400: "#F5EED6",
        500: "#F2EAD0",
        600: "#EADBA8",
        700: "#E4CA77",
        800: "#DDB637",
        900: "#C59D1B",
      },
      teal: {
        50: "#E6F3F4",
        100: "#D4EAEC",
        200: "#ADD7DB",
        300: "#7FC0C7",
        400: "#499EA7",
        500: "#326C73",
        600: "#2D6167",
        700: "#255055",
        800: "#1C3C40",
        900: "#142C2E",
      },
      red: {
        50: "#F2B0A1",
        100: "#F0A594",
        200: "#EB8F7A",
        300: "#E46E53",
        400: "#D24323",
        500: "#8C2D18",
        600: "#7F2815",
        700: "#732412",
        800: "#591B0D",
        900: "#47150A",
      },
      rust: {
        50: "#F8EEE8",
        100: "#F0DCD1",
        200: "#DEB7A0",
        300: "#CE9574",
        400: "#BB7349",
        500: "#8C5637",
        600: "#7B4A2E",
        700: "#693E25",
        800: "#53311D",
        900: "#412615",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries")
  ],
} satisfies Config;

