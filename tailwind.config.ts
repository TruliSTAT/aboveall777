import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tiffany: {
          DEFAULT: '#4BBDB5',
          mid: '#81D8D0',
          pale: '#D4F2F0',
          dark: '#2A9E97',
        },
        gold: '#D4A83A',
        offwhite: '#F5FAFA',
        brand: {
          dark: '#2A2A2A',
        },
      },
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F5FAFA 0%, #D4F2F0 100%)',
        'tiffany-gradient': 'linear-gradient(135deg, #4BBDB5 0%, #2A9E97 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A83A 0%, #B8922E 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
