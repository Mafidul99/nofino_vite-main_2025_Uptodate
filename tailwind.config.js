/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        fadeInDown: 'fadeInDown 2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-200%)'
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      }
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
      }
    },
    screens: {
      '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},  // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},  // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'},   // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},   // => @media (max-width: 639px) { ... }
      'xs': {'max': '378px'},   // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
  }
  ],
}