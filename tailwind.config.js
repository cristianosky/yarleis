const paletteTheme = {
  primary: {
    default: 'var(--theme-primary-default)',
    50: 'var(--theme-primary-50)',
    100: 'var(--theme-primary-100)',
    200: 'var(--theme-primary-200)',
    300: 'var(--theme-primary-300)',
    400: 'var(--theme-primary-400)',
    500: 'var(--theme-primary-500)',
    600: 'var(--theme-primary-600)',
    700: 'var(--theme-primary-700)',
    800: 'var(--theme-primary-800)',
    900: 'var(--theme-primary-900)',
    A100: 'var(--theme-primary-A100)',
    A200: 'var(--theme-primary-A200)',
    A400: 'var(--theme-primary-A400)',
    A700: 'var(--theme-primary-A700)',
    contrast: {
      default: 'var(--theme-primary-contrast-default)',
      50: 'var(--theme-primary-contrast-50)',
      100: 'var(--theme-primary-contrast-100)',
      200: 'var(--theme-primary-contrast-200)',
      300: 'var(--theme-primary-contrast-300)',
      400: 'var(--theme-primary-contrast-400)',
      500: 'var(--theme-primary-contrast-500)',
      600: 'var(--theme-primary-contrast-600)',
      700: 'var(--theme-primary-contrast-700)',
      800: 'var(--theme-primary-contrast-800)',
      900: 'var(--theme-primary-contrast-900)',
      A100: 'var(--theme-primary-contrast-A100)',
      A200: 'var(--theme-primary-contrast-A200)',
      A400: 'var(--theme-primary-contrast-A400)',
      A700: 'var(--theme-primary-contrast-A700)'
    }
  },
  secondary: {
    default: 'var(--theme-secondary-default)',
    50: 'var(--theme-secondary-50)',
    100: 'var(--theme-secondary-100)',
    200: 'var(--theme-secondary-200)',
    300: 'var(--theme-secondary-300)',
    400: 'var(--theme-secondary-400)',
    500: 'var(--theme-secondary-500)',
    600: 'var(--theme-secondary-600)',
    700: 'var(--theme-secondary-700)',
    800: 'var(--theme-secondary-800)',
    900: 'var(--theme-secondary-900)',
    A100: 'var(--theme-secondary-A100)',
    A200: 'var(--theme-secondary-A200)',
    A400: 'var(--theme-secondary-A400)',
    A700: 'var(--theme-secondary-A700)',
    contrast: {
      default: 'var(--theme-secondary-contrast-default)',
      50: 'var(--theme-secondary-contrast-50)',
      100: 'var(--theme-secondary-contrast-100)',
      200: 'var(--theme-secondary-contrast-200)',
      300: 'var(--theme-secondary-contrast-300)',
      400: 'var(--theme-secondary-contrast-400)',
      500: 'var(--theme-secondary-contrast-500)',
      600: 'var(--theme-secondary-contrast-600)',
      700: 'var(--theme-secondary-contrast-700)',
      800: 'var(--theme-secondary-contrast-800)',
      900: 'var(--theme-secondary-contrast-900)',
      A100: 'var(--theme-secondary-contrast-A100)',
      A200: 'var(--theme-secondary-contrast-A200)',
      A400: 'var(--theme-secondary-contrast-A400)',
      A700: 'var(--theme-secondary-contrast-A700)'
    }
  },
  danger: {
    default: 'var(--theme-danger-default)',
    50: 'var(--theme-danger-50)',
    100: 'var(--theme-danger-100)',
    200: 'var(--theme-danger-200)',
    300: 'var(--theme-danger-300)',
    400: 'var(--theme-danger-400)',
    500: 'var(--theme-danger-500)',
    600: 'var(--theme-danger-600)',
    700: 'var(--theme-danger-700)',
    800: 'var(--theme-danger-800)',
    900: 'var(--theme-danger-900)',
    A100: 'var(--theme-danger-A100)',
    A200: 'var(--theme-danger-A200)',
    A400: 'var(--theme-danger-A400)',
    A700: 'var(--theme-danger-A700)',
    contrast: {
      default: 'var(--theme-danger-contrast-default)',
      50: 'var(--theme-danger-contrast-50)',
      100: 'var(--theme-danger-contrast-100)',
      200: 'var(--theme-danger-contrast-200)',
      300: 'var(--theme-danger-contrast-300)',
      400: 'var(--theme-danger-contrast-400)',
      500: 'var(--theme-danger-contrast-500)',
      600: 'var(--theme-danger-contrast-600)',
      700: 'var(--theme-danger-contrast-700)',
      800: 'var(--theme-danger-contrast-800)',
      900: 'var(--theme-danger-contrast-900)',
      A100: 'var(--theme-danger-contrast-A100)',
      A200: 'var(--theme-danger-contrast-A200)',
      A400: 'var(--theme-danger-contrast-A400)',
      A700: 'var(--theme-danger-contrast-A700)'
    }
  }
};

const bgPalette = {
  default: {
    50: '#e9e9e9',
    100: '#c8c8c8',
    200: '#a3a3a3',
    300: '#7e7e7e',
    400: '#636363',
    500: '#474747',
    600: '#404040',
    700: '#373737',
    800: '#2f2f2f',
    900: '#202020'
  }
};

module.exports = {
  prefix: '',
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
      '2xl': '4000px'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite'
      },
      colors: paletteTheme,
      backgroundColor: Object.assign({ ...paletteTheme }, bgPalette),
      divideColor: Object.assign({ ...paletteTheme }, bgPalette),
      borderColor: Object.assign({ ...paletteTheme }, bgPalette),
      gradientColorStops: paletteTheme,
      placeholderColor: paletteTheme,
      ringColor: paletteTheme,
      ringOffsetColor: paletteTheme,
      textColor: Object.assign({ ...paletteTheme }, bgPalette),
      boxShadow: {
        'top-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        top: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)',
        'top-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'top-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
        'top-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
        'top-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        'top-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      zIndex: {
        '-10': '-10',
        auto: 'auto',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-20': '-20deg',
        '-25': '-25deg',
        '-30': '-30deg',
        '-35': '-35deg',
        '-40': '-40deg',
        0: '0',
        20: '20deg',
        25: '25deg',
        30: '30deg',
        35: '35deg',
        40: '40deg',
        45: '45deg',
        90: '90deg',
        135: '135deg',
        180: '180deg',
        270: '270deg'
      },
      height: {
        max: 'max-content',
        min: 'min-content'
      },
      widtth: {
        65: '17rem'
      },
      maxHeight: {
        '1/2': '50%'
      },
      minHeight: {
        '1/2': '50%'
      },
      maxWidth: {
        '1/2': '50%'
      },
      minWidth: {
        '1/2': '50%'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      backgroundColor: ['dark'],
      divideColor: ['dark'],
      borderColor: ['dark'],
      gradientColorStops: ['dark'],
      placeholderColor: ['dark'],
      ringColor: ['dark'],
      ringOffsetColor: ['dark'],
      textColor: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
