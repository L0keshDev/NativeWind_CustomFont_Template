/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        EduAUVICWANTDots_bold: ['EduAUVICWANTDots-Bold'],
        EduAUVICWANTDots_regular: ['EduAUVICWANTDots-Regular'],
        EduAUVICWANTDots_semiBold: ['EduAUVICWANTDots-SemiBold'],
        EduAUVICWANTDots_medium: ['EduAUVICWANTDots-Medium'],
      },
    },
  },
  plugins: [],
};
