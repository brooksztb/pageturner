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
      'white': 'var(--white)'
    },
    extend: {
      spacing: {
        '300px': '300px',
        '400px': '400px',
        '1/2': '50%'
      },
      minHeight: {
        '300px': '300px'
      },
      maxWidth: {
        '400px': '400px'
      },
      backgroundPosition: {
        'none-none': '0% 0%',
        'half-none': '50% 0%'
      },
      backgroundImage: {
        'book-gradient-to-r':
          'linear-gradient(to right, rgba(245, 154, 0,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%)',
        'book-gradient-to-b':
          'linear-gradient(to bottom, rgba(245, 154, 0,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%)'
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
