/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #fff, 0 0 20px #f0f', color: '#fff' },
          '50%': { textShadow: '0 0 20px #0ff, 0 0 30px #0ff', color: '#0ff' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}