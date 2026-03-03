import React from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Selected Projects</h2>
            <div className="flex flex-col">
                {projects.map((project) => (
                    <div key={project.id} className="list-item-container flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                        <div className="flex-1 w-full">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                {project.isFeatured && (
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm bg-orange-500 text-black">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <p className="text-stone-400 text-xs md:text-sm leading-relaxed mb-4 max-w-2xl">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="mono text-[9px] md:text-[10px] uppercase tracking-wider text-stone-500">
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>


                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 mono text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors"
                        >
                            View Project
                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectList;
