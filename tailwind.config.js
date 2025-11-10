/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c5d9ff',
          300: '#a4bdff',
          400: '#7b93ff',
          500: '#5b6aff',
          600: '#4249ff',
          700: '#3d3dff',
          800: '#323fd9',
          900: '#2d35b5',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1f1f1f',
          700: '#0d0d0d',
          800: '#000000',
          900: '#000000',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0d0d0d 0%, #1f1f1f 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3d3dff 0%, #2d35b5 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(61, 61, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
