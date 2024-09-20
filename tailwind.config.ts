import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E58F28",
        secondery: "#373026",
      },
    },
  },
  plugins: [],
};

export default config;
