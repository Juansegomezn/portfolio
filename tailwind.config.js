/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: {
        300: '#a4bdff',
        400: '#7b93ff',
        500: '#5b6aff',
        600: '#4249ff',
        700: '#3d3dff',
        800: '#323fd9',
        900: '#2d35b5',
      },
      secondary: {
        600: '#1f1f1f',
        700: '#0d0d0d',
        800: '#000000',
        900: '#000000',
      },
      gray: {
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
      },
      emerald: {
        300: '#6ee7b7',
        700: '#047857',
        900: '#064e3b',
      },
    },
  },
  plugins: [],
}
