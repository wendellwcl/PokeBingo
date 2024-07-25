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
                background: "#b3bf54",
                "background-light": "#ccd48d",
                "background-light-100": "#c4cd7a",
                "background-complementary": "#547ebf",
                success: "#6ec13e",
                "text-complementary": "#324373",
            },
        },
    },
    plugins: [],
};
export default config;
