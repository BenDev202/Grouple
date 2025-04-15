import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    prefix: '',
    theme: {
        theme: {
            Container: {
                center: true,
                padding: "2rem",
                screens: {
                    '2xl': "1400px",
                },
            },
            backgroundImage: {
                "radial-gradient": {
                    "radial-gradient": "radial-gradient: (circle at 50% 40%, white, black)",
                },
                extend: {
                    colors: {
                        themeBlack: "#090908",
                        themeGray: "#27272a",
                        themeDarkGray: "#27272a",
                        themeTextGray: "#b4b0ae",
                        themeTextWhite: "#f2ece9",
                        border: "hsl(var(--border))",
                        input: "hsl(var(--input))",
                        ring: "hsl(var(--ring))",
                        background: "hsl(var(--background))",
                        foreground: "hsl(var(--foreground))",
                        primary: {
                            DEFUALT: "hsl(var(--primary))",
                            foreground: "hsl(var(--primary-foreground))",
                        },
                        secondary: {
                            DEFUALT: "hsl(var(--secondary))",
                            foreground: "hsl(var(--secondary-foreground))",
                        },

                        destruction: {
                            DEFUALT: "hsl(var(--destruction))",
                            foreground: "hsl(var(--destruction-foreground))",
                        },
                        muted: {
                            DEFUALT: "hsl(var(--muted))",
                            foreground: "hsl(var(--muted-foreground))",
                        },

                        accent: {
                            DEFUALT: "hsl(var(--accent))",
                            foreground: "hsl(var(--accent-foreground))",
                        },

                        popover: {
                            DEFUALT: "hsl(var(--popover))",
                            foreground: "hsl(var(--popover-foreground))",
                        },

                        card: {
                            DEFUALT: "hsl(var(--card))",
                            foreground: "hsl(var(--card-foreground))",
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
        },
        
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config;