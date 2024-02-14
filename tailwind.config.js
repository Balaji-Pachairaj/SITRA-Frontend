/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
     theme: {
          extend: {
               fontFamily: {
                    poppins: ["Poppins", "sans-serif"],
                    inter: ["Roboto", "sans-serif"],
                    montserrat: ["Montserrat", "sans-serif"],
                    roboto: ["Inter", "sans-serif"],
               },
          },
     },
     plugins: [],
};
