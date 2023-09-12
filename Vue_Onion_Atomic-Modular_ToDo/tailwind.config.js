/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                luxury: {
                    ...require("daisyui/src/theming/themes")["[data-theme=luxury]"],
                    "base-100": "#000",
                    "primary": "#F2C83B",
                },
            },
        ],
    },
}