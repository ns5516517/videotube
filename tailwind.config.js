/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'body': '#161722',
                'primary': '#CC0000',
                'secondary': '#FFFFFF',
                'desc': 'AAAAAA',
                "dark": '#181818',
                "light_dark": '#212121',
                'brand': {
                    '50': '#f0fdf4',
                    '100': '#dcfce7',
                    '200': '#bbf7d0',
                    '300': '#86efac',
                    '400': '#4ade80',
                    '500': '#22c55e',
                    '600': '#16a34a',
                    '700': '#15803d',
                    '800': '#166534',
                    '900': '#14532d',
                },
            },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1152px',   // custom width
                '2xl': '1280px' // custom width
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}