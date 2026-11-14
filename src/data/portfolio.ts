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
