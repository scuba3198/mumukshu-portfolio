import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectItem } from "../types/portfolio";

const GITHUB_URL = "https://github.com/scuba3198";
const DIVE_LOG_URL = "https://scuba3198.github.io/scuba3198/";

interface ProgrammingProps {
	projects: ProjectItem[];
}

const Programming: React.FC<ProgrammingProps> = ({ projects }) => {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="section-title">Selected work</h2>
			<p className="mono text-[10px] md:text-xs uppercase tracking-widest text-orange-500 mb-4">
				B.E. Software Engineering
			</p>
			<p className="text-stone-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
				Small, working tools you can open and try right now. Need something
				similar for your business? Get in touch and tell me what you have in
				mind.
			</p>

			<div className="flex flex-col">
				{projects.map((project) => (
					<article key={project.id} className="list-item-container w-full group">
						<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
							{project.name}
						</h3>
						<p className="text-stone-400 text-xs md:text-sm leading-relaxed mt-2 mb-4 max-w-2xl">
							{project.summary}
						</p>
						<ul className="flex flex-wrap gap-2 mb-4">
							{project.tags.map((tag) => (
								<li
									key={tag}
									className="mono text-[10px] uppercase tracking-widest text-stone-300 border border-stone-700 px-2 py-1"
								>
									{tag}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
							<a
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1 mono text-xs uppercase tracking-widest text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors"
							>
								Live demo
								<ArrowUpRight size={14} />
							</a>
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1 mono text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors"
							>
								Source
								<ArrowUpRight size={14} />
							</a>
						</div>
					</article>
				))}
			</div>

			<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
				<a
					href={GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 mono text-[10px] md:text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors"
				>
					<Github size={14} />
					More on GitHub
				</a>
				<a
					href={DIVE_LOG_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 mono text-[10px] md:text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors"
				>
					<ArrowUpRight size={14} />
					Dive log
				</a>
			</div>
		</div>
	);
};

export default Programming;
