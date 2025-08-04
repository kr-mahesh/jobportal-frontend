// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//       },
//       colors: {
//         primary: '#2563EB',
//         secondary: '#F3F4F6',
//         border: '#D1D5DB',
//       },
//     },
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)"
        },
        header: {
          background1: "var(--header-bg-1)",
          background2: "var(--header-bg-2)",
          background3: "var(--header-bg-3)",
          text1: "var(--header-text-1)",
          text2: "var(--header-text-2)",
          text3: "var(--header-text-3)"
        },
        button: {
          background1: "var(--button-bg-1)",
          background2: "var(--button-bg-2)",
          text1: "var(--button-text-1)"
        }
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif']
      }
    }
  },
  plugins: []
};

