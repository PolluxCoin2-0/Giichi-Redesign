/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors:{
       "green": "#569F42",
       "yellow": "#FBC901",
       "orange": "#FAAC01",
      },

    backgroundImage: {
      'purple-gradient': ' linear-gradient(225deg, #ffc480, #dcc474, #b8c26f, #93be70, #6fb673, #4bac78, #299e7b, #078f7d);',
     
      },

  },
  plugins: [],
}