/**
 * portfolio.ts
 * Centralized type definitions for the mumukshu-portfolio project.
 */

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

// ── Projects ──
export interface ProjectItem {
	id: string;
	name: string;
	summary: string;
	tags: string[];
	repoUrl: string;
	demoUrl: string;
}

// ── Profile ──
export interface ProfileData {
	name: string;
	title: string;
}

// ── Root Data Shape ──
export interface PortfolioData {
	profile: ProfileData;
	experience: ExperienceItem[];
	education: EducationItem[];
	projects: ProjectItem[];
}
