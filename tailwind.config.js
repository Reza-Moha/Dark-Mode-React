/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        iranSans_Light: ["iranSans_Light"],
        iranSans_Black: ["iranSans_Black"],
        iranSans_Medium: ["iranSans_Medium"],
        iranSans_UltraLight: ["iranSans_UltraLight"],
        kalameh_Black: ["kalameh_Black"],
        kalameh_Bold: ["kalameh_Bold"],
        kalameh_Regular: ["kalameh_Regular"],
        kalameh_Thin: ["kalameh_Thin"],
        DoranExtraBold: ["Doran-extraBold"],
        DoranExtraBold2: ["Doran-extraBold2"],
      },
    },
  },
  plugins: [],
};
