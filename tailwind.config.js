// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        powderBlue: "#40534C",
        jetBlack: "#343434",
        lightBlue: "#508D4E",
      },
      backgroundImage: {
        "home-background":
          "url('https://wallpapers.com/images/hd/restaurant-background-npda8c1hqh6d0xso.jpg')",
      },
    },
  },
  plugins: [],
};
