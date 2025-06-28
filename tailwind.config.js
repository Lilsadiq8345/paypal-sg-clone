/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/assets/main.css",
    ],
    theme: {
        extend: {
            colors: {
                'paypal-blue': '#003087',
                'paypal-blue-dark': '#003087',
                'paypal-blue-light': '#009cde',
                'paypal-yellow': '#ffc439',
                'paypal-yellow-dark': '#ffb800',
                'paypal-navy': '#001435',
                'paypal-gray': '#687173',
                'paypal-gray-light': '#f5f7fa',
                'paypal-gray-dark': '#2c2e2f',
            },
            fontFamily: {
                'paypal': ['PayPalSansSmall', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'sans': ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
        },
    },
    plugins: [],
} 