/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // added for the animation of the Welcome to Fix My Home Screen 
    extend: {
      keyframes: {
        softSlideIn: {
          '0%': { transform: 'translateX(60px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        softSlideIn: 'softSlideIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
