// import { Josefin_Sans, Mukta } from 'next/font/google';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font
        poppins: ['Poppins', 'sans-serif'], // Example custom font
        lora: ['Lora', 'serif'], // Example custom font
        mukta: ['Mukta', 'sans-serif'], // Example custom font
        Josefin_Sans: ['Josefin Sans', 'sans-serif'], // Example custom font
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
