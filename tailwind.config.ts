<<<<<<< HEAD
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
=======
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
>>>>>>> master
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        background: 'var(--background)',
        foreground: 'var(--foreground)',
=======
        background: "var(--background)",
        foreground: "var(--foreground)",
>>>>>>> master
      },
    },
  },
  plugins: [],
} satisfies Config;
