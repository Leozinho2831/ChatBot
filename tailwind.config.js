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
                poppins: ['Poppins', 'sans-serif'], 
                inter: ['Inter', 'Arial' ,'sans-serif'],
            },
            colors: {
                gray: {
                    50: '#F5F7FA',
                    100: '#E6EAF0',
                    200: '#CED3D9',
                    300: '#C0C5CB',
                    400: '#B2B8BF',
                    500: '#989EA6',
                    600: '#7E838C',
                    700: '#626872',
                    800: '#474D59',
                    900: '#363B47',
                    950: '#242833',
                    'black': '#0B0C12',
                }
            }
        },
    },
    plugins: [],
}