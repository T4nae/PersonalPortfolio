/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                offwhite: "#F2F1E6",
                earth: {
                    50: "#F9E0BB",
                    100: "#FFC26F",
                    200: "#C38154",
                    300: "#884A39",
                },
                sky: {
                    50: "#7DE5ED",
                    100: "#576CBC",
                    200: "#19376D",
                    300: "#0B2447",
                },
            },
            backgroundImage: {
                stars: "url('https://user-images.githubusercontent.com/51880648/247115198-fa2877b9-cda9-4220-80de-537baca82025.svg')",
                cloud: "url('https://user-images.githubusercontent.com/51880648/247117625-50c30b01-5d27-4138-8b46-ac894f537a80.png')",
            },
        },
    },
    plugins: [],
};
