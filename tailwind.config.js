module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '320',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}