/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../../public/assets/photo-1529736576495-1ed4a29ca7e1.avif')",
      },
    },
  },
  plugins: [],
};
