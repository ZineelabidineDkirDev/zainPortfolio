// tailwind.config.js
module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },

  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1800px",
        "xl":"1420px",
        "sm": "640px",
        "md": "760px", 
        "lg": "1200px",
        "xs": "390px",
      },
    },
    extend: {
      fontFamily: {
        primary: "var(--font-Raleway)",
        secondary: "var(--font-JetBrainsMono)"
      },
      colors: {
        accent: '#FF0099',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#1C1C22",
        accent: {
          DEFAULT: "#5500FF",
          hover: "#360094",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", borderRadius: "60px" },
          to: { height: "var(--radix-accordion-content-height-radius)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shape1: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        shape2: {
          '100%': {
            transform: 'translate(1200px, -400px)',
          },
        },
        shape3: {
          '100%': {
            transform: 'translate(300px, -600px) rotate(360deg)',
          },
        },
        shape4: {
          '100%': {
            transform: 'translate(1200px, -800px) ',
          },
        },
        shape5: {
          '100%': {
            opacity: 1,
            transform: 'translate(0, -150px) rotate(720deg)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shape1: 'shape1 30s linear infinite reverse',
        shape2: 'shape2 40s linear infinite 5s',
        shape3: 'shape3 20s linear infinite',
        shape4: 'shape4 20s linear infinite 5s reverse',
        shape5: 'shape5 25s linear infinite',
      },
      backgroundImage: {
        'overlay': 'url(/images/rea.gif)', // Replace with your background image path
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
