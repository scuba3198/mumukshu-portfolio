import { GraduationCap, Code2, Briefcase, BookOpen, Palette, Smile, MapPin, ExternalLink } from 'lucide-react';

export const portfolioData = {
    profile: {
        name: "Mumukshu D.C.",
        title: "PTE Instructor & EdTech Developer",
        location: "Kathmandu, Nepal",
    },
    projects: [
        {
            id: "essay-architect",
            title: "Essay Architect Pro",
            description: "A digital writing assistant now powered by advanced generative language models. V0.3.0-pro features an AI Examiner for strict scoring, context-aware autocomplete, and a magazine-style editorial interface for PTE/IELTS mastery.",
            tags: ["React.js", "Advanced Generative Models", "Tailwind CSS"],
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
                tagText: "text-yellow-400"
            }
        },
        {
            id: "geoflux",
            title: "GeoFlux",
            description: "A generative art sandbox powered by particle physics. Features gravity simulation, plexus effects, and customizable fluid dynamics for digital art creation.",
            tags: ["React.js", "Canvas API"],
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
                tagText: ["text-purple-400", "text-cyan-400"]
            }
        }
    ],
    experience: [
        {
            id: 1,
            company: "KIEC Pvt. Ltd.",
            role: "PTE Instructor",
            period: "Jun 2025 – Present",
            description: "Currently teaching 4 hours per day across multiple batches due to exceptionally high student retention and feedback. Innovation: Conceptualized and built Essay Architect to solve the 'blank page' problem.",
            color: "bg-stone-900",
            isCurrent: true
        },
        {
            id: 2,
            company: "Education Connect Pvt. Ltd.",
            role: "PTE Instructor",
            period: "Aug 2025 – Nov 2025",
            description: "Delivered intensive daily PTE preparation classes, focusing on rapid score improvement strategies.",
            color: "bg-stone-300",
            isCurrent: false
        },
        {
            id: 3,
            company: "Mark Education Foundation",
            role: "IELTS & PTE Instructor",
            period: "Jul 2025 – Nov 2025",
            description: "Managed daily IELTS and PTE classes, guiding students through effective exam preparation strategies 6 days/week.",
            color: "bg-stone-300",
            isCurrent: false
        },
        {
            id: 4,
            company: "Secured Life Intl. Group",
            role: "PTE Instructor",
            period: "Dec 2024 – Jun 2025",
            description: "Designed comprehensive PTE curriculum for diverse age groups. Impact: 99% of students scored above 60 under my mentorship.",
            color: "bg-stone-300",
            isCurrent: false
        },
        {
            id: 5,
            company: "NCLEX Preparation Center",
            role: "PTE & OET Instructor (Remote)",
            period: "Nov 2024 – Jun 2025",
            description: "Taught specialized English proficiency to nurses post-NCLEX for US migration. Achieved a near-perfect first-attempt success rate for nursing students.",
            color: "bg-stone-300",
            isCurrent: false
        }
    ],
    stats: [
        { value: "99%", label: "Student Success Rate (>60 Score)", badge: "High Impact" },
        { value: "8.0", label: "Overall Band (8.5 L/R)", subLabel: "IELTS" },
        { value: "90", label: "Writing Score (77 Overall)", subLabel: "PTE" },
    ],
    skills: {
        pedagogical: ["Curriculum Design", "Test Strategy", "Virtual Instruction"],
        technical: ["Prompt Engineering", "Rapid Prototyping", "UI/UX Basics"]
    },
    education: [
        { degree: "B.E. in Software Engineering", institution: "Bohai University, China", year: "2018" },
        { degree: "Masterpieces of World Lit.", institution: "HarvardX (EdX)", year: "2020" },
        { degree: "M.A. in English", institution: "H.N.B. Garhwal University, India", year: "2021" }
    ],
    interests: {
        list: "Stock Market Analysis • Video Games • Cinema"
    }
};
