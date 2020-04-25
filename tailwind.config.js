/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
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
        card: "312px"
      },
      zIndex: {
        n1: "-10"
      },
      fontSize: {
        sl: "1.75rem",
        xxl: "2rem",
        "4-5xl": "2.5rem"
      }
    }
  },
  variants: {
    padding: ["first", "last", "responsive"],
    container: ["responsive"]
  },
  plugins: [require("tailwindcss-textShadow")]
};
