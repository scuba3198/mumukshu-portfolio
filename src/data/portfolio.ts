import type { PortfolioData } from "../types/portfolio";

const rawPortfolioData: PortfolioData = {
	profile: {
		name: "Mumukshu D.C.",
		title: "IELTS/PTE Instructor & Software Engineer",
	},
	experience: [
		{
			id: 1,
			company: "KIEC Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Jun 2025 – Present",
			highlights: [
				{
					type: "general",
					text: "Currently teaching 4 hours per day across multiple batches due to exceptionally high student retention and feedback.",
				},
				{
					type: "innovation",
					text: "Conceptualized and built Essay Architect to solve the 'blank page' problem, and PTE Class Coverage Studio for systematic curriculum tracking.",
				},
			],
			color: "bg-stone-900",
			isCurrent: true,
		},
		{
			id: 2,
			company: "Education Connect Pvt. Ltd.",
			role: "PTE Instructor",
			period: "Aug 2025 – Present",
			highlights: [
				{
					type: "general",
					text: "Delivered intensive daily PTE preparation classes, focusing on rapid score improvement strategies.",
				},
			],
			color: "bg-stone-300",
			isCurrent: true,
		},
		{
			id: 3,
			company: "Mark Education Foundation",
			role: "IELTS & PTE Instructor",
			period: "Jul 2025 – Present",
			highlights: [
				{
					type: "general",
					text: "Managed daily IELTS and PTE classes, guiding students through effective exam preparation strategies 6 days/week.",
				},
			],
			color: "bg-stone-300",
			isCurrent: true,
		},
		{
			id: 4,
			company: "Secured Life Intl. Group",
			role: "PTE Instructor",
			period: "Dec 2024 – Jun 2025",
			highlights: [
				{
					type: "general",
					text: "Designed comprehensive PTE curriculum for diverse age groups.",
				},
				{
					type: "impact",
					text: "99% of students scored above 60 under my mentorship.",
				},
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
				{
					type: "general",
					text: "Taught specialized English proficiency to nurses post-NCLEX for US migration.",
				},
				{
					type: "impact",
					text: "Achieved a near-perfect first-attempt success rate for nursing students.",
				},
			],
			color: "bg-stone-300",
			isCurrent: false,
		},
	],
	projects: [
		{
			id: "salary-calculator",
			name: "Salary Calculator",
			summary:
				"Tracks workdays on a Bikram Sambat calendar and works out monthly earnings, with sign-in, cloud sync and per-organisation management.",
			tags: ["React", "TypeScript", "Supabase", "Vite"],
			repoUrl: "https://github.com/scuba3198/salary-calculator",
			demoUrl: "https://scuba3198.github.io/salary-calculator/",
		},
		{
			id: "pte-class-coverage",
			name: "PTE Class Coverage",
			summary:
				"Shows a teacher which parts of the curriculum each class has covered, so nothing gets skipped. Works offline and saves to the cloud after sign-in.",
			tags: ["React", "TypeScript", "Supabase", "Effect"],
			repoUrl: "https://github.com/scuba3198/pte-class-coverage",
			demoUrl: "https://scuba3198.github.io/pte-class-coverage/",
		},
		{
			id: "nepse-momentum-trader",
			name: "NEPSE Momentum Dashboard",
			summary:
				"A browser dashboard for NEPSE traders: sizes positions by risk, tracks open orders, trailing stops and closed trades, and reports profit and loss. Data stays in your browser.",
			tags: ["JavaScript", "HTML", "CSS", "NEPSE"],
			repoUrl: "https://github.com/scuba3198/nepse-momentum-trader",
			demoUrl: "https://scuba3198.github.io/nepse-momentum-trader/",
		},
		{
			id: "loan-calculator",
			name: "Loan Calculator",
			summary:
				"Calculates monthly instalments for flat-rate, reducing-balance and bullet loans, with a full repayment schedule, payment tracking and JSON export.",
			tags: ["ReScript", "React", "Vite"],
			repoUrl: "https://github.com/scuba3198/loan-calculator",
			demoUrl: "https://scuba3198.github.io/loan-calculator/",
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
