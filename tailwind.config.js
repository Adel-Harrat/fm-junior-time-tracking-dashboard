/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-blue": "hsl(246, 80%, 60%)",
        "tw-orange": "hsl(15, 100%, 70%)",
        "tw-soft-blue": "hsl(195, 74%, 62%)",
        "tw-light-red": "hsl(348, 100%, 68%)",
        "tw-green": "hsl(145, 58%, 55%)",
        "tw-violet": "hsl(264, 64%, 52%)",
        "tw-soft-orange": "hsl(43, 84%, 65%)",
        "tw-dark": "hsl(226, 43%, 10%)",
        "tw-dark-blue": "hsl(235, 46%, 20%)",
        "tw-desaturated-blue": "hsl(235, 45%, 61%)",
        "tw-pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
