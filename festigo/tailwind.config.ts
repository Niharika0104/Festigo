import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page-hero': "url('/assets/images/main-page-hero.jpg')",
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans'],
      },
      boxShadow: {
        'custom-shadow': '0px 16px 24px 0px rgba(0, 0, 0, 0.06), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};

export default config;




