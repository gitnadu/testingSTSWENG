import tailwindforms from "@tailwindcss/forms"
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'normal-green': "#86A27A",
        'dark-green': "#32472CBD",
        'dark-green-A': "#32472C",
        'light-green': "#D1D16E",
        'flesh': "#E6DCCD",
        'off-white': "#F9F5F0",
        'dark-green-B': "#5E8453FC",
        'dark-green-C': "#95A38F",
        'light-green-A': "#E5F9DD",
      },
    },
  },
  plugins: [daisyui, tailwindforms],
};
export default config;
