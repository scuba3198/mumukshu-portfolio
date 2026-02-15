/**
 * portfolio.ts
 * Centralized type definitions for the mumukshu-portfolio project.
 */

// ── Icon Names ──
/** Valid icon names corresponding to keys in ProjectCard's icon map */
export type IconName = 'Code2' | 'Palette' | 'Calculator' | 'ClipboardCheck' | 'Scan';

// ── Project ──
export interface ProjectTheme {
    bg: string;
    text: string;
    border: string;
    hoverBorder: string;
    accent: string;
    tagBg: string;
    tagText: string | string[];           // single color OR array (GeoFlux case)
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    isFeatured: boolean;
    iconName: IconName;
    category?: string;                     // optional — defaults to "Creative Sandbox"
    categoryBg?: string;                   // optional — defaults to bg-purple-500
    theme: ProjectTheme;
}

// ── Experience ──
export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    color: string;
    isCurrent: boolean;
}

// ── Stats ──
export interface StatItem {
    value: string;
    label: string;
    badge?: string;
    subLabel?: string;
}

// ── Skills ──
export interface SkillsData {
    pedagogical: string[];
    technical: string[];
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
    location: string;
    phone: string;
    email: string;
}

// ── Interests ──
export interface InterestsData {
    list: string;
}

// ── Root Data Shape ──
export interface PortfolioData {
    profile: ProfileData;
    projects: Project[];
    experience: ExperienceItem[];
    stats: StatItem[];
    skills: SkillsData;
    education: EducationItem[];
    interests: InterestsData;
}
