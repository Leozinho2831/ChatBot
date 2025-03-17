/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/javascript/*.js', '*.html'],
    theme: {
        extend: {
            screens: {
            'mobile': '480px',
            'tablet': '768px',
            'desktop': '1024px',
            },
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
            }
        },
    },
    plugins: [],
}