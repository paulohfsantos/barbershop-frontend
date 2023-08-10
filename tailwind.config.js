import daisyUI from 'daisyui'
import FormKitVariants from '@formkit/themes/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue, html}",
    "./tailwind-theme.ts"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula",
    ],
  },
  plugins: [daisyUI, FormKitVariants],
}

