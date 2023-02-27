/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'no-left': '25px 25px 10px rgb(0 0 0 / 0.15)'
      },
      width: {
        svg: 'calc(174% + 1.3px)'
      },
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(-1.4em)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        help: {
          '0%, 4%': {
            opacity: 0
          },
          '5%, 100%': {
            opacity: 1
          }
        }
      },
      animation: {
        fade: 'fade 0.2s',
        help: 'help 80s'
      }
    },
  },
  plugins: [],
}
