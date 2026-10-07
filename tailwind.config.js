/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festa: {
          primary: "#6F557D",
          deep: "#432C4D",
          ink: "#35283A",
          lavender: "#DCD2E3",
          soft: "#EEE8F1",
          tint: "#F8F5FA",
          ivory: "#FAF8F4",
          gold: "#C9A96E",
          goldLight: "#EAD5A8",
          mutedGreen: "#71806B",
          sageSoft: "#E6ECE4",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'phone-glow': '0 25px 60px -15px rgba(67, 44, 77, 0.25), 0 0 40px 0 rgba(201, 169, 110, 0.15)',
        'glass-card': '0 10px 30px -10px rgba(67, 44, 77, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.7)',
        'gold-glow': '0 4px 20px rgba(201, 169, 110, 0.35)',
      }
    },
  },
  plugins: [],
}
