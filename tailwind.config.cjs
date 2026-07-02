module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00D4FF',
        secondary: '#0A1F3F',
        accent: '#F5F8FF',
        success: '#00B341',
        warning: '#E6A300',
        error: '#E63946',
        info: '#00D4FF',
        dark: {
          bg: '#1A1A1A',
          surface: '#2A2E3A',
          text: '#F2F2F2',
          muted: '#7D8595'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      },
      fontSize: {
        h1: 'clamp(2rem, 6vw, 4rem)',
        h2: 'clamp(1.5rem, 4.5vw, 3.2rem)',
        h3: 'clamp(1.25rem, 3.5vw, 2.4rem)',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
        body: '1rem',
        'body-sm': '0.9375rem',
        caption: '0.75rem'
      },
      lineHeight: {
        display: 1.1,
        heading: 1.15,
        tight: 1.2,
        normal: 1.3,
        relaxed: 1.5,
        loose: 1.6
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem'
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '600ms'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        ease: 'ease-out'
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.015em',
        normal: '0em',
        wide: '0.05em'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
