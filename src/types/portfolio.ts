/**
 * portfolio.ts
 * Centralized type definitions for the mumukshu-portfolio project.
 */

// ── Project ──
export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	link: string;
	isFeatured: boolean;
	category?: string; // optional — defaults to "Creative Sandbox"
}

// ── Experience ──
export interface ExperienceHighlight {
	type: "innovation" | "impact" | "general";
	text: string;
}

export interface ExperienceItem {
	id: number;
	company: string;
	role: string;
	period: string;
	highlights: ExperienceHighlight[];
	color: string;
	isCurrent: boolean;
}

// ── Education ──
export interface EducationItem {
	degree: string;
	institution: string;
	year: string;
}

// ── Profile ──
export interface ProfileData {
	name: string;
	title: string;
}

// ── Root Data Shape ──
export interface PortfolioData {
	profile: ProfileData;
	projects: Project[];
	experience: ExperienceItem[];
	education: EducationItem[];
}
