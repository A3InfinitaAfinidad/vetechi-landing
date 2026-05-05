import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        dark: {
          50: '#F1F3F2',
          100: '#E2E7E4',
          200: '#C5CFC9',
          300: '#A9B7AF',
          400: '#8C9F94',
          500: '#6F877A',
          600: '#526F5F',
          700: '#355745',
          800: '#2A4A3C',
          900: '#1B3B2F', // Verde oscuro institucional
        },


        accent: {
          50: '#F9F6F3',
          100: '#F3EDE6',
          200: '#EBE0D5',
          300: '#DDD1BF',
          400: '#D4C2A8',
          500: '#C5A77A',
          600: '#B8956A',
          700: '#A6844F',
          800: '#956D3D',
          900: '#7A5530',
        },
        emergency: '#C0392B',
        text: '#4F4F4F',
        'bg-soft': '#F7F9F7',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui'],
        subtitle: ['var(--font-montserrat)', 'system-ui'],
        body: ['var(--font-opensans)', 'system-ui'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce-soft 1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(27, 59, 47, 0.85) 0%, rgba(46, 125, 50, 0.75) 100%)',
      },
    },
  },
  plugins: [],
}

export default config