/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        welcome: 'url(../assets/Hero.png)',
        blob: 'url(../assets/Vector 2.svg)',
      },
    },
  },
  plugins: [],
};
