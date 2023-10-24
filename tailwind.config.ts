import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  plugins: [require("daisyui")],

  // daisyui: {
  //   themes: [
  //     {
  //       dark: {
  //         primary: "#f45350",
  //         secondary: "#69e592",
  //         accent: "#59eae0",
  //         neutral: "#181826",
  //         "base-100": "#2f2f51",
  //         info: "#2f92d0",
  //         success: "#22dd92",
  //         warning: "#f6bb09",
  //         error: "#e53e6a",
  //       },
  //     },
  //   ],
  // },
}
export default config
