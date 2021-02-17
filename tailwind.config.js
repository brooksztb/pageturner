module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors: {
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent-1': 'var(--accent-1)',
      'accent-2': 'var(--accent-2)',
      'accent-3': 'var(--accent-3)',
      'white': 'var(--white)',
      'black': 'var(--black)',
      'red': 'var(--red)',
      'green': 'var(--green)',
      'transparent': 'transparent'
    },
    extend: {
      zIndex: {
        '99': '99',
        '100': '100',
        '1000': '1000'
      },
      spacing: {
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '1/2': '50%'
      },
      minHeight: {
        '300px': '300px'
      },
      maxHeight: {
        '550px': '550px'
      },
      minWidth: {
        '320px': '320px'
      },
      maxWidth: {
        '400px': '400px',
        '500px': '500px'
      },
      backgroundPosition: {
        'none-none': '0% 0%',
        'half-none': '50% 0%'
      },
      backgroundImage: {
        'book-gradient-to-r':
          'linear-gradient(to right, rgba(245, 154, 0,.2) 0%, var(--black) 60%, var(--black) 100%)',
        'book-gradient-to-b':
          'linear-gradient(to bottom, rgba(245, 154, 0,.2) 0%, var(--black) 60%, var(--black) 100%)',
        'modal-gradient':
          'linear-gradient(to bottom, rgba(245, 154, 0,.2) 0%, var(--primary) 60%, var(--primary) 100%)'
      },
      pointerEvents: {
        'all': 'all'
      },
      transition: {
        'border-color': 'border-color'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
