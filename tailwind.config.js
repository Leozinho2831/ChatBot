/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/javascript/*.js', '*.html'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'Arial' ,'sans-serif'],
            },
            colors: {
                gray: {
                    50: '#F7F7F7',
                    100: '#EDEDED',
                    200: '#DEDEDE',
                    300: '#CCCCCC',
                    400: '#B2B2B2',
                    500: '#9C9C9C',
                    600: '#717171',
                    700: '#595959',
                    800: '#404040',
                    900: '#2E2E2E',
                    950: '#1A1A1A',
                    'black': '#0E0E0E',
                }
            },
            keyframes: {
                'fadeIn': {
                    '0%': { opacity: 0 },
                    '65%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'textAlert': {
                    '0%': { opacity: 0 },
                    '20%': { opacity: 1 },
                    '80%': { opacity: 1},
                    '100%': { opacity: 0},
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease forwards',
                textAlert: 'textAlert 1.5s ease forwards'
            },
            screens: {
                'xs': '480px', 
            },
        },
    },
    plugins: [],
}