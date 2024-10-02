/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        'dodorounded':['DodoRounded', 'sans-serif'],
      },
      width: {
        '1280' : '80rem'
      },
      colors: {
        mainColor: '#050c2a',
        headerHover: 'rgb(255,105,0)',
        textColor: 'rgb(255,105,0)',
        hColor: 'rgb(236, 94, 36)',
        bgColor: 'rgb(253, 242, 232)'
      },
      spacing: {
        '415px': '415px',
        'z20px' : '-20px',
        '420px' : '420px',
        'r0px' : '0',
        '46%' : '46%',
        '55%' : '55%',
        '74%' : '74%',
        '42%' : '42%'
      },
      padding: {
        headerPadding: '12px calc(50% - 640px)',
        headerMediumPadding: '12px calc(50% - 480px)'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

