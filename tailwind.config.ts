import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";
const defaultTheme = require("tailwindcss/defaultTheme");
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{ts,tsx}",
	"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
		fontFamily: {
			hackathon: ["Abril Fatface", "serif"], // Create a Tailwind alias
		  },
		boxShadow: {
			input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			glowText:'#00ffee',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
			  "color-1": "hsl(var(--color-1))",
			  "color-2": "hsl(var(--color-2))",
			  "color-3": "hsl(var(--color-3))",
			  "color-4": "hsl(var(--color-4))",
			  "color-5": "hsl(var(--color-5))",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
			"aurora-border": {
				"0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
				"25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
				"50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
				"75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
			  },
			  "aurora-1": {
				"0%, 100%": { top: "0", right: "0" },
				"50%": { top: "50%", right: "25%" },
				"75%": { top: "25%", right: "50%" },
			  },
			  "aurora-2": {
				"0%, 100%": { top: "0", left: "0" },
				"60%": { top: "75%", left: "25%" },
				"85%": { top: "50%", left: "50%" },
			  },
			  "aurora-3": {
				"0%, 100%": { bottom: "0", left: "0" },
				"40%": { bottom: "50%", left: "25%" },
				"65%": { bottom: "25%", left: "50%" },
			  },
			  "aurora-4": {
				"0%, 100%": { bottom: "0", right: "0" },
				"50%": { bottom: "25%", right: "40%" },
				"90%": { bottom: "50%", right: "25%" },
			  },
			  "shiny-text": {
				"0%, 90%, 100%": {
				  "background-position": "calc(-100% - var(--shiny-width)) 0",
				},
				"30%, 60%": {
				  "background-position": "calc(100% + var(--shiny-width)) 0",
				},
			  },
			aurora: {
				from: {
				  backgroundPosition: "50% 50%, 50% 50%",
				},
				to: {
				  backgroundPosition: "350% 50%, 350% 50%",
				},
			  },
			  move: {
				"0%": { transform: "translateX(-200px)" },
				"100%": { transform: "translateX(200px)" },
			  },
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			  moveHorizontal: {
				"0%": {
				  transform: "translateX(-50%) translateY(-10%)",
				},
				"50%": {
				  transform: "translateX(50%) translateY(10%)",
				},
				"100%": {
				  transform: "translateX(-50%) translateY(-10%)",
				},
			  },
			  moveInCircle: {
				"0%": {
				  transform: "rotate(0deg)",
				},
				"50%": {
				  transform: "rotate(180deg)",
				},
				"100%": {
				  transform: "rotate(360deg)",
				},
			  },
			  moveVertical: {
				"0%": {
				  transform: "translateY(-50%)",
				},
				"50%": {
				  transform: "translateY(50%)",
				},
				"100%": {
				  transform: "translateY(-50%)",
				},
			  },
			  scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
			  meteor: {
				"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
				"70%": { opacity: "1" },
				"100%": {
				  transform: "rotate(215deg) translateX(-500px)",
				  opacity: "0",
				},
			  },
			  spotlight: {
				"0%": {
				  opacity: "0",
				  transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
				  opacity: "1",
				  transform: "translate(-50%,-40%) scale(1)",
				},
			  },
			gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
		  "circling": {
			"0%": {
			  transform:
				"rotate(calc(var(--offset) * 1deg)) translate(calc(var(--radius) * 1px), 0) rotate(calc(var(--offset) * -1deg))",
			},
			"100%": {
			  transform:
				"rotate(calc(360deg + (var(--offset) * 1deg))) translate(calc(var(--radius) * 1px), 0) rotate(calc(-360deg + (var(--offset) * -1deg)))",
			},
		  },
		
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			"shiny-text": "shiny-text 8s infinite",
			 aurora: "aurora 60s linear infinite",
			 move: "move 5s linear infinite",
			 first: "moveVertical 30s ease infinite",
			 second: "moveInCircle 20s reverse infinite",
			 third: "moveInCircle 40s linear infinite",
			 fourth: "moveHorizontal 40s ease infinite",
			 fifth: "moveInCircle 20s ease infinite",
			 scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			 'meteor-effect': "meteor 5s linear infinite",
			 spotlight: "spotlight 2s ease .75s 1 forwards",
			 gradient: 'gradient 8s linear infinite',
			 "circling": "circling calc(var(--duration)*1s) linear infinite",
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),heroui(),
	addVariablesForColors,
	function ({ matchUtilities, theme }: any) {
		matchUtilities(
		  {
			"bg-grid": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-grid-small": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-dot": (value: any) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
			  )}")`,
			  
			}),
			"bg-dot-thick": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
				)}")`,
			  }),
		  },
		  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		);
	  },
],
};
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
export default config;
