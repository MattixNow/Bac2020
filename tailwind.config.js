/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    filter: {
      disabled: "grayscale(1) blur(4px)",
      blurred: "blur(2px)"
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vh"
    }),
    fontFamily: {
      sans: [
        "Inter",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "Noto Sans",
        "sans-serif",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      serif: [
        "Playfair Display",
        "Georgia",
        "Times New Roman",
        "Times",
        "serif"
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    extend: {
      maxWidth: {
        xxl: "1600px"
      },
      height: {
        imgA: "80px",
        card: "168px"
      },
      width: {
        imgA: "140px",
        card: "312px",
        "side-xl": "290px",
        stepCard: "541px"
      },
      zIndex: {
        n1: "-10"
      },
      fontSize: {
        sl: "1.75rem",
        xxl: "2rem",
        "36": "2.25rem",
        "4-5xl": "2.5rem",
        "3-5xl": "2rem"
      },
      colors: {
        "dark-purple": "#3C366B",
        "smart-gray": "#F9F9F9"
      },
      inset: {
        "1/2": "50%"
      },
      margin: {
        "1/2": "50%"
      },
      spacing: {
        "1-5": "0.625rem",
        34: "8.5rem"
      },
      borderRadius: {
        large: "20px"
      }
    }
  },
  variants: {
    padding: ["first", "last", "responsive"],
    container: ["responsive"]
  },
  plugins: [require("tailwindcss-filters")]
};
