/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            cbrown: "#DBBEC0",
            cblue: "#A2B8CF",
            ccream: "#F5F5F5"
        }
    },
  },
  plugins: [],
}

