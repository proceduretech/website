const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Explicitly configure content paths for Tailwind v4
      // This ensures proper purging of unused classes
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
        "./content/**/*.{md,mdx}",
      ],
    },
  },
};

export default config;
