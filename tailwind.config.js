module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
      },
      boxShadow: {
        'text': '0 1px 3px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
