import type { LucideIcon } from "lucide-react";
import {
	Calculator,
	ClipboardCheck,
	Code2,
	ExternalLink,
	Palette,
	Scan,
} from "lucide-react";
import type { IconName, Project } from "../types/portfolio";

const icons: Record<IconName, LucideIcon> = {
	Code2: Code2,
	Palette: Palette,
	Calculator: Calculator,
	ClipboardCheck: ClipboardCheck,
	Scan: Scan,
};

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const Icon: LucideIcon = icons[project.iconName];
	const { theme } = project;

	return (
		<article
			className={`bento-card md:col-span-2 cursor-pointer border-stone-200 dark:border-white/5 hover:border-stone-300 dark:hover:border-white/20 group relative overflow-hidden`}
		>
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="block h-full w-full absolute inset-0 z-20"
				aria-label={`View ${project.title} Project`}
			>
				<span className="sr-only">View {project.title} Project</span>
			</a>
			<div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-3 text-stone-900 dark:text-white">
				<Icon size={140} strokeWidth={1} />
			</div>
			{/* Hover glow effect for the card */}
			<div className={`absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] ${project.categoryBg || "bg-purple-500"}/20 dark:opacity-0 group-hover:opacity-50 dark:group-hover:opacity-30 blur-[60px] rounded-full pointer-events-none transition-opacity duration-700`}></div>

			<div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
				<div>
					<div className="flex justify-between items-start mb-5">
						{project.isFeatured ? (
							<span className="bg-stone-900/10 dark:bg-white/10 text-stone-800 dark:text-white border border-stone-200 dark:border-white/20 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md transition-colors">
								Featured
							</span>
						) : (
							<span
								className={`${project.categoryBg?.replace('bg-', 'text-').replace('-600', '-600 dark:text-').replace('-500', '-500 dark:text-') || "text-purple-600 dark:text-purple-400"} bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md transition-colors`}
							>
								{project.category ?? "Sandbox"}
							</span>
						)}
						<ExternalLink
							className="text-stone-400 dark:text-stone-500 group-hover:text-stone-900 dark:group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1"
							size={20}
						/>
					</div>
					<h2
						className={`text-2xl font-bold mb-3 ${theme.accent ? `group-hover:${theme.accent.replace('400', '600 dark:group-hover:text-400')}` : "group-hover:text-stone-900 dark:group-hover:text-white"} transition-colors text-stone-800 dark:text-stone-200`}
					>
						{project.title}
					</h2>
					<p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 font-medium transition-colors">
						{project.description}
					</p>
				</div>
				<div className="flex flex-wrap gap-2 mt-auto">
					{project.tags.map((tag, idx) => {
						const textColor = Array.isArray(theme.tagText)
							? theme.tagText[idx % theme.tagText.length]
							: theme.tagText;
						const textColorClass = textColor ? textColor.replace('400', '600 dark:text-400') : "text-stone-700 dark:text-stone-300";
						return (
							<span
								key={tag}
								className={`px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-xs font-mono font-bold ${textColorClass} border border-stone-200 dark:border-white/10 transition-colors shadow-sm dark:shadow-none`}
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
