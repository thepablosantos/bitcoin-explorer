/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exemplo de cor laranja para Bitcoin
        btcOrange: '#F7931A',
        darkGray: '#121212',
      },
    },
  },
  plugins: [],
}
