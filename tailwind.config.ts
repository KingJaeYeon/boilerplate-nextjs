import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      tb: "1024px",
      dt: "1350px",
    },

    fontFamily: {
      pretendard: ["var(--font-Pretendard)", "sans-serif"],
    },
    colors: {
      white: "hsl(var(--white))",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      switch: {
        themeThumb: "hsl(var(--theme-thumb))",
        themeSwitch: "hsl(var(--theme-switch))",
        onThumb: "hsl(var(--switch-thumb-on))",
        onSwitch: "hsl(var(--switch-on))",
        offThumb: "hsl(var(--switch-thumb-off))",
        offSwitch: "hsl(var(--switch-off))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        hover: {
          DEFAULT: "hsl(var(--primary-hover))",
        },
        disabled: {
          DEFAULT: "hsl(var(--primary-disabled))",
          foreground: "hsl(var(--primary-disabled-foreground))",
        },
      },
      secondary: {
        button: {
          DEFAULT: "hsl(var(--button-secondary))",
          foreground: "hsl(var(--button-secondary-foreground))",
          hover: {
            DEFAULT: "hsl(var(--button-secondary-hover))",
            foreground: "hsl(var(--button-secondary-foreground-hover))",
          },
          disabled: {
            foreground: "hsl(var(--button-secondary-foreground))",
          },
        },
      },
      outline: {
        button: {
          foreground: "hsl(var(--button-outline-foreground))",
          hover: "hsl(var(--button-outline-foreground-hover))",
          disabled: "hsl(var(--button-outline-foreground-disabled))",
        },
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
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
      full: "9999px",
    },

    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
