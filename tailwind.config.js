/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      fontFamily:{
        'poppins': ['Poppins'],
        'nunito': ['Nunito'],
      },
      colors:{
        'primary': '#1e1e1e',
        'secondary': '#007f5f',
        'paraText': '#616161',
        'banner': '#f8f8f8',
        'bannerCard': '#292929',
      },
      boxShadow: {
        '3xl': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
      },
    },
  },
  plugins: [],
}

// box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;