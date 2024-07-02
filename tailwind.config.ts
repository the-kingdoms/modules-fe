import type { Config } from "tailwindcss";
import { merge } from "lodash";
import tailwindCustomConfig from "./tailwind_custom.config";
import tailwindElevationConfig from "./tailwind_elevation.config";

const baseConfig: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
const config: Config = merge(
  baseConfig,
  tailwindCustomConfig,
  tailwindElevationConfig
);

export default config;
