const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          32: '#7270FF',
          64: '#07004D',
        },
        yellow: {
          32: '#F3CA40',
        },
        stone: {
          32: '#D3D0CB',
        },
        neutral: {
          32: '#3F3F3F',
          64: '#F7EDE2',
          711: '#191919'
        },
        rose: {
          32: '#FF785A'
        },
        amber: {
          32: '#FFAA5A'
        },
        purple: {
          32: '#AA6373',
          64: '#822E81',
        }

      },
      fontFamily: {
        'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        ibm: "'IBM Plex Sans', sans-serif",
        jetbrains: "'IBM Plex Mono', monospace",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}