import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-solid": "#b3bf54",
                "primary-light": "#ccd48d",
                "primary-light-100": "#c4cd7a",
                complementary: "#547ebf",
                "complementary-dark": "#324373",
                success: "#6ec13e",
            },
        },
    },
    plugins: [],
};
export default config;
