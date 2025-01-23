/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': {
            opacity: 0,
            transform: 'scaleY(0) translateY(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'scaleY(1) translateY(0)'
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'slideDown': 'slideDown 0.3s ease-out forwards',
        'fadeIn': 'fadeIn 0.3s ease-out forwards'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

