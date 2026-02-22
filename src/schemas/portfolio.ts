import { z } from "zod";

// ── Icon Names ──
export const iconNameSchema = z.enum([
    "Code2",
    "Palette",
    "Calculator",
    "ClipboardCheck",
    "Scan",
]);

// ── Project ──
export const projectThemeSchema = z.object({
    bg: z.string(),
    text: z.string(),
    border: z.string(),
    hoverBorder: z.string(),
    accent: z.string(),
    tagBg: z.string(),
    tagText: z.union([z.string(), z.array(z.string())]),
});

export const projectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url(),
    isFeatured: z.boolean(),
    iconName: iconNameSchema,
    category: z.string().optional(),
    categoryBg: z.string().optional(),
    categoryText: z.string().optional(),
    theme: projectThemeSchema,
});

// ── Experience ──
export const experienceHighlightSchema = z.object({
    type: z.enum(["innovation", "impact", "general"]),
    text: z.string(),
});

export const experienceItemSchema = z.object({
    id: z.number(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    highlights: z.array(experienceHighlightSchema),
    color: z.string(),
    isCurrent: z.boolean(),
});

// ── Stats ──
export const statItemSchema = z.object({
    value: z.string(),
    label: z.string(),
    badge: z.string().optional(),
    subLabel: z.string().optional(),
});

// ── Skills ──
export const skillsDataSchema = z.object({
    pedagogical: z.array(z.string()),
    technical: z.array(z.string()),
});

// ── Education ──
export const educationItemSchema = z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.string(),
});

// ── Profile ──
export const profileDataSchema = z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    phone: z.string(),
    email: z.string().email(),
});

// ── Interests ──
export const interestsDataSchema = z.object({
    list: z.string(),
});

// ── Root Data Shape ──
export const portfolioDataSchema = z.object({
    profile: profileDataSchema,
    projects: z.array(projectSchema),
    experience: z.array(experienceItemSchema),
    stats: z.array(statItemSchema),
    skills: skillsDataSchema,
    education: z.array(educationItemSchema),
    interests: interestsDataSchema,
});
