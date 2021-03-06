const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-1deg)'
            },
            '50%': {
                transform: 'rotate(1deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
    },
      colors: {
        blue: {
          16: '#DFDEFF',
          32: '#7270FF',
          64: '#07004D',
        },
        yellow: {
          16: '#FFF4CD',
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
          16: '#FFC0B1',
          32: '#FF785A'
        },
        amber: {
          16: '#FFDEBF',
          32: '#FFAA5A'
        },
        purple: {
          32: '#AA6373',
          64: '#822E81',
        }

      },
      fontFamily: {
        'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        'mono': ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        ibm: "'IBM Plex Sans', sans-serif",
        jetbrains: "monospace",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}