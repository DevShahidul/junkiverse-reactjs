/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const whoJunkiesBg = 'assets/images/BrickCutThree-4.jpg';
const choseJunkiesBg = 'assets/images/BrickWallCutRepeatWithoutStone.jpg';
const roadMapBg = 'assets/images/JunkiverseRustysFinal.jpg';
const paperSectionBg = 'assets/images/paper-section-bg.png';
// const rectangleBg = 'assets/images/Rectangle.jpg';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    borderWidth: {
      '5': '5px',
    },
    borderRadius: {
      '14': '14px',
      '25': '25px',
      '50': '50px',
      '100': '100px',
    },
    extend: {
      boxShadow: {
        'junkie-header': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'inset': 'inset -5px 5px 10px #1E2225, inset 1px -1px 15px #444C55',
        'inset-3': 'inset -3px 3px 15px #1E2023, inset 3px -3px 5px #2E3235',
        'inset-active': '-6px 6px 15px #0F1012, 6px -6px 15px #3D4246',
      },
      lineHeight: {
        '12': '2.75rem',
      },
      fontFamily: {
        sans: [
          'Aubrey',
          ...defaultTheme.fontFamily.sans,
        ],
        inter: [
          'Inter',
        ]
      },
      colors: {
        'theme-gray': '#9E9C9C',
        'regal-blue': '#243c5a',
        'theme-red': '#FF0000',
        'text': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'item-heading-border': '#656565',
        'light-text': '#B1B1B1'
      },
      backgroundColor: {
        'neutral-250': '#D9D9D9',
        'theme-red': '#FF0000',
        'design-purple': '#DC6060',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'junkie-body': '#282B2F',
        'junkie-black': '#31373D',
        'avatar-black': '#26292C'
      },
      backgroundImage: {
        'who-junkies-section-pattern': `url("${whoJunkiesBg}")`,
        'chose-junkies-section-pattern': `url("${choseJunkiesBg}")`,
        'road-map': `url("${roadMapBg}")`,
        'paper-section': `url("${paperSectionBg}")`,
        'gradient-black-63': 'linear-gradient(180deg, rgba(0, 0, 0, 0.63) 36.98%, rgba(0, 0, 0, 0) 100%)',
        'gradient-black-75': 'linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
        'gradient-purple-75': 'linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
        'gradient-gray-2': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
      },
      spacing: {
        '5.5': '1.375rem',
        '18': '4.375rem',
        '19': '4.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '36.5': '9.125rem',
        '90px': '90px',
        '311': '19.4375rem',
      },
      padding: {
        'screen': '100vh'
      },
      scale: {
        '121': '1.21',
      },
      blur: {
        xs: '2.5px',
      }
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3_5xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '6.5xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.8xl') },
        'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.3_5xl') }
      })
    })
  ]
}
