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
    extend: {}
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
