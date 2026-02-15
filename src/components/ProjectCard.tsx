import type { LucideIcon } from 'lucide-react';
import type { Project, IconName } from '../types/portfolio';
import { ExternalLink, Code2, Palette, Calculator, ClipboardCheck, Scan } from 'lucide-react';

const icons: Record<IconName, LucideIcon> = {
    Code2: Code2,
    Palette: Palette,
    Calculator: Calculator,
    ClipboardCheck: ClipboardCheck,
    Scan: Scan
};

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const Icon: LucideIcon = icons[project.iconName];
    const { theme } = project;

    return (
        <article
            className={`bento-card md:col-span-2 ${theme.bg} ${theme.text} ${theme.border} cursor-pointer ${theme.hoverBorder} group relative`}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full absolute inset-0 z-20"
                aria-label={`View ${project.title} Project`}
            ></a>
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={100} strokeWidth={1.5} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        {project.isFeatured ? (
                            <span className={`bg-yellow-400 text-stone-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded`}>
                                Featured Project
                            </span>
                        ) : (
                            <span className={`${project.categoryBg ?? 'bg-purple-500'} text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded`}>
                                {project.category ?? 'Creative Sandbox'}
                            </span>
                        )}
                        <ExternalLink className={`text-stone-400 group-hover:text-white transition-colors`} size={24} />
                    </div>
                    <h2 className={`text-2xl font-bold mb-2 ${theme.accent ? `group-hover:${theme.accent}` : ''} transition-colors`}>
                        {project.title}
                    </h2>
                    <p className="text-stone-400 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => {
                        // Handle array of text colors for GeoFlux case or single string
                        const textColorClass: string = Array.isArray(theme.tagText)
                            ? theme.tagText[idx % theme.tagText.length]
                            : theme.tagText;
                        return (
                            <span
                                key={idx}
                                className={`px-3 py-1 ${theme.tagBg} rounded-full text-xs font-mono ${textColorClass} border border-stone-700`}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
