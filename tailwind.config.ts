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
    colors: {
      white: "hsl(var(--white))",
      border: "hsl(var(--border))",
      red: "hsl(var(--red))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      transparent: "hsl(var(--transparent))",

      placeholder: "hsl(var(--place-holder))",
      placeholder02: "hsl(var(--place-holder-02))",

      input: {
        DEFAULT: "hsl(var(--input-background))",
        border: "hsl(var(--input-border))",
        placeholder: "hsl(var(--input-placeholder))",
        foreground: "hsl(var(--input-foreground)/0.3)",
        focus: {
          border: "hsl(var(--input-focus-border))",
          foreground: "hsl(var(--input-focus-foreground))",
        },
        disabled: {
          border: "hsl(var(--input-disabled-border))",
          foreground: "hsl(var(--input-disabled-foreground))",
        },
      },
      switch: {
        theme: {
          thumb: "hsl(var(--switch-theme-thumb))",
          switch: "hsl(var(--switch-theme))",
        },
        on: {
          thumb: "hsl(var(--switch-thumb-on))",
          switch: "hsl(var(--switch-on))",
        },
        off: {
          thumb: "hsl(var(--switch-thumb-off))",
          switch: "hsl(var(--switch-off))",
        },
      },
      button: {
        primary: {
          DEFAULT: "hsl(var(--button-primary-background))",
          foreground: "hsl(var(--button-primary-foreground))",
          hover: {
            DEFAULT: "hsl(var(--button-primary-hover))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--button-secondary-background))",
          foreground: "hsl(var(--button-secondary-foreground))",
          hover: {
            DEFAULT: "hsl(var(--button-secondary-hover-background))",
            foreground: "hsl(var(--button-secondary-hover-foreground))",
          },
        },
        outline: {
          border: "hsl(var(--button-outline-border))",
          foreground: "hsl(var(--button-outline-foreground))",
          hover: "hsl(var(--button-outline-hover-foreground))",
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
        DEFAULT: "hsl(var(--popover-background))",
        overlay: "hsl(var(--popover-overlay))",
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
    fontFamily: {
      pretendard: ["var(--font-pretendard)", "sans-serif"],
    },

    fontSize: {
      "24": "1.5rem",
      "22": "1.375rem",
      "20": "1.25rem",
      "18": "1.125rem",
      "16": "1rem",
      "15": "0.938rem",
      "14": "0.875rem",
      "13": "0.813rem",
      "12": "0.75rem",
      "11": "0.688rem",
      "9": "0.563rem",
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
