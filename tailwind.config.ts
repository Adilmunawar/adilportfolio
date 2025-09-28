
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'cyber-dark': '#1a1a2e',
        'cyber-gray': '#2a2a3e',
        'cyber-cyan': '#00ffff',
        'cyber-blue': '#0080ff',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "tech-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "drift-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(20px, -20px) rotate(120deg)" },
          "66%": { transform: "translate(-15px, 15px) rotate(240deg)" }
        },
        "drift-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-25px, -15px) rotate(-120deg)" },
          "66%": { transform: "translate(15px, 25px) rotate(-240deg)" }
        },
        "drift-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(18px, 12px) rotate(90deg)" },
          "66%": { transform: "translate(-20px, -18px) rotate(180deg)" }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "float-tech-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "25%": { transform: "translate(8px, -12px) rotate(3deg) scale(1.05)" },
          "50%": { transform: "translate(-5px, -20px) rotate(-2deg) scale(0.95)" },
          "75%": { transform: "translate(-10px, 8px) rotate(4deg) scale(1.02)" }
        },
        "float-tech-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(-10px, 15px) rotate(-3deg) scale(1.03)" },
          "66%": { transform: "translate(6px, -18px) rotate(5deg) scale(0.97)" }
        },
        "float-tech-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "20%": { transform: "translate(12px, 6px) rotate(2deg) scale(1.01)" },
          "40%": { transform: "translate(-8px, -10px) rotate(-4deg) scale(0.99)" },
          "60%": { transform: "translate(4px, 16px) rotate(1deg) scale(1.02)" },
          "80%": { transform: "translate(-6px, -12px) rotate(-3deg) scale(0.98)" }
        },
        "float-tech-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(-15px, 12px) rotate(-6deg) scale(1.04)" }
        },
        "float-tech-5": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "25%": { transform: "translate(14px, -8px) rotate(4deg) scale(0.96)" },
          "75%": { transform: "translate(-12px, 18px) rotate(-5deg) scale(1.03)" }
        },
        "float-tech-6": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "40%": { transform: "translate(-20px, -14px) rotate(-7deg) scale(1.05)" },
          "80%": { transform: "translate(10px, 22px) rotate(3deg) scale(0.95)" }
        },
        "subtle-tilt": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "tech-pulse": "tech-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 3s ease-in-out infinite 0.5s",
        "drift-1": "drift-1 15s ease-in-out infinite",
        "drift-2": "drift-2 18s ease-in-out infinite",
        "drift-3": "drift-3 20s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 6s linear infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "float-tech-1": "float-tech-1 16s ease-in-out infinite",
        "float-tech-2": "float-tech-2 18s ease-in-out infinite",
        "float-tech-3": "float-tech-3 20s ease-in-out infinite",
        "float-tech-4": "float-tech-4 14s ease-in-out infinite",
        "float-tech-5": "float-tech-5 17s ease-in-out infinite",
        "float-tech-6": "float-tech-6 19s ease-in-out infinite",
        "subtle-tilt": "subtle-tilt 4s ease-in-out infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'text-gradient': 'linear-gradient(45deg, #00ffff, #0080ff, #00ffff)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
