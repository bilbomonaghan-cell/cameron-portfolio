import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maple: {
          orange: '#f4900c',
          amber: '#ffc933',
          red: '#d62828',
          dark: '#0a0602',
          card: '#120901',
          border: '#f4900c',
          text: '#fef3dc',
          muted: '#9a7c5a',
          green: '#4ade80',
          shadow: '#7c3a04',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        pixel: '4px 4px 0px #7c3a04',
        'pixel-lg': '6px 6px 0px #7c3a04',
        'pixel-hover': '2px 2px 0px #7c3a04',
        'pixel-glow': '0 0 20px rgba(244, 144, 12, 0.4), 4px 4px 0px #7c3a04',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 3s linear infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
