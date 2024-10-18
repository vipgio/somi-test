/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: "#a22e5c",
                    orange: "#e3802d",
                    teal: "#008996",
                    blue: "#568ab6",
                    navy: "#2e598e",
                    card: "#d9d9e5",
                },
            },
            backgroundImage: {
                gradient: "url('../assets/images/bg_gradient.webp')",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                xxs: ".625rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
