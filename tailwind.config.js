/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': 'Montserrat',
      'serif': 'Playfair Display'
    },
    extend: {
      colors: {
        'red-dahlia': '#6E0D25'
      }
    },
  },
  plugins: [],
}

