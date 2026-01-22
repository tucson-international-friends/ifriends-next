import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
          "50": "#fefdf8",
          "100": "#fef9e8",
          "200": "#fcf0c5",
          "300": "#f9e39d",
          "400": "#f4c956",
          "500": "#e9a832",
          "600": "#d18a22",
          "700": "#ae6a1d",
          "800": "#8d541f",
          "900": "#74461d",
          "950": "#43240c",
        },
        sand: {
          "50": "#faf8f5",
          "100": "#f5f0e8",
          "200": "#eae0d0",
          "300": "#dccab0",
          "400": "#cbae8c",
          "500": "#be9770",
          "600": "#b18460",
          "700": "#946c50",
          "800": "#795945",
          "900": "#634a3b",
          "950": "#35261e",
        },
        warm: {
          "50": "#fdfcfb",
          "100": "#f9f5f2",
          "200": "#f3ebe4",
          "300": "#e8dace",
          "400": "#d4bfaa",
          "500": "#c0a286",
          "600": "#a88567",
          "700": "#8c6a4f",
          "800": "#735542",
          "900": "#5f4638",
          "950": "#32231b",
        },
        terracotta: {
          "50": "#fef6f3",
          "100": "#fceae3",
          "200": "#fad5c7",
          "300": "#f5b5a0",
          "400": "#ed8a6e",
          "500": "#e26b4a",
          "600": "#cf5030",
          "700": "#ad3f25",
          "800": "#8f3623",
          "900": "#773123",
          "950": "#40160e",
        },
        sage: {
          "50": "#f4f9f4",
          "100": "#e6f1e6",
          "200": "#cee3cf",
          "300": "#a7ccaa",
          "400": "#78ad7d",
          "500": "#558f5b",
          "600": "#427447",
          "700": "#365c3a",
          "800": "#2e4b31",
          "900": "#273e2a",
          "950": "#112114",
        },
        oasis: {
          "50": "#f8fcf3",
          "100": "#eef8e2",
          "200": "#ddf1c6",
          "300": "#c2e078",
          "400": "#a8d35a",
          "500": "#8bc13f",
          "600": "#6d9a2f",
          "700": "#547728",
          "800": "#455f24",
          "900": "#3b5021",
          "950": "#1e2c0e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(100%)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
