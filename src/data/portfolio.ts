import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
	profile: {
		name: "Mumukshu D.C.",
		title: "PTE Instructor & EdTech Developer",
		location: "Kathmandu, Nepal",
		phone: "9862329617",
		email: "phoenixrising656@gmail.com",
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
			iconName: "Code2",
			theme: {
				bg: "bg-stone-900",
				text: "text-white",
				border: "border-stone-800",
				hoverBorder: "hover:border-stone-600",
				accent: "text-yellow-400",
				tagBg: "bg-stone-800",
				tagText: "text-yellow-400",
			},
		},
		{
			id: "geoflux",
			title: "GeoFlux",
			description:
				"A generative art sandbox powered by particle physics. Features gravity simulation, plexus effects, and customizable fluid dynamics for digital art creation.",
			tags: ["React + TS", "Canvas API"],
			link: "https://scuba3198.github.io/Geoflux/",
			isFeatured: false,
			iconName: "Palette",
			theme: {
				bg: "bg-stone-900",
				text: "text-white",
				border: "border-stone-800",
				hoverBorder: "hover:border-purple-500",
				accent: "text-purple-400",
				tagBg: "bg-stone-800",
				tagText: ["text-purple-400", "text-cyan-400"],
			},
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
			categoryBg: "bg-blue-600",
			iconName: "ClipboardCheck",
			theme: {
				bg: "bg-stone-900",
				text: "text-white",
				border: "border-stone-800",
				hoverBorder: "hover:border-blue-500",
				accent: "text-blue-400",
				tagBg: "bg-stone-800",
				tagText: "text-blue-400",
			},
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
			categoryBg: "bg-emerald-600",
			iconName: "Calculator",
			theme: {
				bg: "bg-stone-900",
				text: "text-white",
				border: "border-stone-800",
				hoverBorder: "hover:border-emerald-500",
				accent: "text-emerald-400",
				tagBg: "bg-stone-800",
				tagText: "text-emerald-400",
			},
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
			categoryBg: "bg-orange-600",
			iconName: "Scan",
			theme: {
				bg: "bg-stone-900",
				text: "text-white",
				border: "border-stone-800",
				hoverBorder: "hover:border-orange-500",
				accent: "text-orange-400",
				tagBg: "bg-stone-800",
				tagText: "text-orange-400",
			},
		},
	],
	experience: [
		{
			id: 1,
			company: "KIEC Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Jun 2025 – Present",
			description:
				"Currently teaching 4 hours per day across multiple batches due to exceptionally high student retention and feedback. Innovations: Conceptualized and built Essay Architect to solve the 'blank page' problem, and PTE Class Coverage Studio for systematic curriculum tracking.",
			color: "bg-stone-900",
			isCurrent: true,
		},
		{
			id: 2,
			company: "Education Connect Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Aug 2025 – Nov 2025",
			description:
				"Delivered intensive daily PTE preparation classes, focusing on rapid score improvement strategies.",
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 3,
			company: "Mark Education Foundation",
			role: "IELTS & PTE Instructor",
			period: "Jul 2025 – Nov 2025",
			description:
				"Managed daily IELTS and PTE classes, guiding students through effective exam preparation strategies 6 days/week.",
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 4,
			company: "Secured Life Intl. Group",
			role: "PTE Instructor",
			period: "Dec 2024 – Jun 2025",
			description:
				"Designed comprehensive PTE curriculum for diverse age groups. Impact: 99% of students scored above 60 under my mentorship.",
			color: "bg-stone-300",
			isCurrent: false,
		},
		{
			id: 5,
			company: "NCLEX Preparation Center",
			role: "PTE & OET Instructor (Remote)",
			period: "Nov 2024 – Jun 2025",
			description:
				"Taught specialized English proficiency to nurses post-NCLEX for US migration. Achieved a near-perfect first-attempt success rate for nursing students.",
			color: "bg-stone-300",
			isCurrent: false,
		},
	],
	stats: [
		{
			value: "99%",
			label: "Student Success Rate (>60 Score)",
			badge: "High Impact",
		},
		{ value: "8.0", label: "Overall Band (8.5 L/R)", subLabel: "IELTS" },
		{ value: "90", label: "Writing Score (77 Overall)", subLabel: "PTE" },
	],
	skills: {
		pedagogical: ["Curriculum Design", "Test Strategy", "Virtual Instruction"],
		technical: ["Prompt Engineering", "Rapid Prototyping", "UI/UX Basics"],
	},
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
	interests: {
		list: "Stock Market Analysis • Video Games • Cinema",
	},
};
