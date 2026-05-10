/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          nova: '#00C3CC',
          glow: 'rgba(0,195,204,0.4)',
        },
        violet: {
          nova: '#6E2FED',
          glow: 'rgba(110,47,237,0.5)',
          light: '#c084fc',
        },
        nova: {
          bg: '#050210',
          surface: 'rgba(255,255,255,0.04)',
          'surface-hover': 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.08)',
          'border-hover': 'rgba(0,195,204,0.4)',
          text: '#F0EEFF',
          'text-muted': 'rgba(240,238,255,0.5)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        float1: 'float1 8s ease-in-out infinite alternate',
        float2: 'float2 10s ease-in-out infinite alternate',
        float3: 'float1 12s ease-in-out infinite alternate',
        pulse: 'pulse 2s ease infinite',
        shine: 'shine 4s linear infinite',
        'shine-fast': 'shine 3s linear infinite',
        fadeSlide: 'fadeSlide 0.8s ease both',
      },
      keyframes: {
        float1: {
          from: { transform: 'translate(0, 0) scale(1)' },
          to: { transform: 'translate(40px, 60px) scale(1.1)' },
        },
        float2: {
          from: { transform: 'translate(0, 0) scale(1)' },
          to: { transform: 'translate(-30px, -50px) scale(1.15)' },
        },
        shine: {
          to: { backgroundPosition: '200% center' },
        },
        fadeSlide: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}
