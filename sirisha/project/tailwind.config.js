export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
