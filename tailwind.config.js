module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#232323",
        input: "#282828",
        ring: "#FFC799",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FFC799",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#161616",
          foreground: "#A0A0A0",
        },
        destructive: {
          DEFAULT: "#FF8080",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#101010",
          foreground: "#A0A0A0",
        },
        accent: {
          DEFAULT: "#1C1C1C",
          foreground: "#FFC799",
        },
        card: {
          DEFAULT: "#161616",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#161616",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

