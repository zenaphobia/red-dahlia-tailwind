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
        'red-dahlia': '#6E0D25',
        'red-dahlia-active': '#7d253b'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0,.85,.5,1)'
      }
    },
  },
  plugins: [],
}

