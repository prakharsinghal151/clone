/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          orange: '#FF9900',
          blue: '#146EB4',
          dark: '#131921',
          light: '#F0F2F2',
        }
      }
    },
  },
  plugins: [],
}
