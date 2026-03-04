import type { PortfolioData } from "../types/portfolio";

const rawPortfolioData: PortfolioData = {
	profile: {
		name: "Mumukshu D.C.",
		title: "IELTS/PTE Instructor & EdTech Developer",
	},
	projects: [
		{
			id: "essay-architect",
			title: "Essay Architect Pro",
			description:
				"A production-ready writing assistant for PTE/IELTS mastery. V0.3.0-pro features an AI Examiner for strict scoring, secure account-based access with multi-device support, and a polished mobile-first experience.",
			tags: ["React + TS", "Advanced Generative Models", "Tailwind CSS"],
			link: "https://pro.essay-architect.uk/",
			isFeatured: true,
		},
		{
			id: "geoflux",
			title: "GeoFlux",
			description:
				"A generative art sandbox powered by particle physics. Features gravity simulation, plexus effects, and customizable fluid dynamics for digital art creation.",
			tags: ["React + TS", "Canvas API"],
			link: "https://scuba3198.github.io/Geoflux/",
			isFeatured: false,
		},
		{
			id: "pte-class-coverage",
			title: "PTE Class Coverage Studio",
			description:
				"A local-first tracker for PTE Academic class coverage. Monitor question types by module, log sessions with auto-save, manage multiple classes, and export/import JSON backups. Works fully offline after first load.",
			tags: ["React + TS", "localStorage", "Vitest"],
			link: "https://scuba3198.github.io/pte-class-coverage/",
			isFeatured: false,
			category: "EdTech Tool",
		},
		{
			id: "salary-calculator",
			title: "Nepali Salary Calculator",
			description:
				"A professional tool for tracking workdays and calculating monthly earnings using the native Bikram Sambat (B.S.) calendar. Features automated TDS calculation, historical data tracking, and a premium Glassmorphism-style interface.",
			tags: ["React + TS", "Supabase", "TS-B.S.", "Vanilla CSS"],
			link: "https://scuba3198.github.io/salary-calculator/",
			isFeatured: false,
			category: "Productivity Tool",
		},
		{
			id: "tms-captcha",
			title: "TMS Captcha Solver",
			description:
				"A high-precision browser extension that locally solves NEPSE TMS captchas using 9-factor spatial density analysis. Features real-time character segmentation, KNN-style pattern matching, and automated input simulation with race condition prevention.",
			tags: ["TypeScript", "Computer Vision", "Browser Extension"],
			link: "https://github.com/scuba3198/tms-captcha",
			isFeatured: true,
			category: "Security & Automation",
		},
	],
	experience: [
		{
			id: 1,
			company: "KIEC Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Jun 2025 – Present",
			highlights: [
				{ type: "general", text: "Currently teaching 4 hours per day across multiple batches due to exceptionally high student retention and feedback." },
				{ type: "innovation", text: "Conceptualized and built Essay Architect to solve the 'blank page' problem, and PTE Class Coverage Studio for systematic curriculum tracking." }
			],
			color: "bg-stone-900",
			isCurrent: true,
		},
		{
			id: 2,
			company: "Education Connect Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Aug 2025 – Nov 2025",
			highlights: [
				{ type: "general", text: "Delivered intensive daily PTE preparation classes, focusing on rapid score improvement strategies." }
			],
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 3,
			company: "Mark Education Foundation",
			role: "IELTS & PTE Instructor",
			period: "Jul 2025 – Nov 2025",
			highlights: [
				{ type: "general", text: "Managed daily IELTS and PTE classes, guiding students through effective exam preparation strategies 6 days/week." }
			],
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 4,
			company: "Secured Life Intl. Group",
			role: "PTE Instructor",
			period: "Dec 2024 – Jun 2025",
			highlights: [
				{ type: "general", text: "Designed comprehensive PTE curriculum for diverse age groups." },
				{ type: "impact", text: "99% of students scored above 60 under my mentorship." }
			],
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 5,
			company: "NCLEX Preparation Center",
			role: "PTE & OET Instructor (Remote)",
			period: "Nov 2024 – Jun 2025",
			highlights: [
				{ type: "general", text: "Taught specialized English proficiency to nurses post-NCLEX for US migration." },
				{ type: "impact", text: "Achieved a near-perfect first-attempt success rate for nursing students." }
			],
			color: "bg-stone-300",
			isCurrent: false,
		},
	],
	education: [
		{
			degree: "B.E. in Software Engineering",
			institution: "Bohai University, China",
			year: "2018",
		},
		{
			degree: "Masterpieces of World Lit.",
			institution: "HarvardX (EdX)",
			year: "2020",
		},
		{
			degree: "M.A. in English",
			institution: "H.N.B. Garhwal University, India",
			year: "2021",
		},
	],
};

export const portfolioData: PortfolioData = rawPortfolioData;
