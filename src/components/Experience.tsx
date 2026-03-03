import React from "react";
import type { PortfolioData } from "../types/portfolio";

interface ExperienceProps {
	experiences: PortfolioData["experience"];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="section-title">Professional Journey</h2>
			<div className="flex flex-col">
				{experiences.map((exp) => (
					<div key={exp.id} className="list-item-container w-full group">
						<div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2 mb-4">
							<div className="w-full">
								<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
									{exp.role}
								</h3>
								<p className="text-stone-300 font-medium text-sm md:text-base">{exp.company}</p>
							</div>
							<span className="mono text-[10px] md:text-xs uppercase tracking-widest text-stone-500 whitespace-nowrap">
								{exp.period}
							</span>
						</div>

						<ul className="space-y-3">
							{exp.highlights.map((highlight, idx) => (
								<li key={idx} className="flex gap-3 text-xs md:text-sm text-stone-400 leading-relaxed">
									<span className="text-orange-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
									<span className="w-full">
										{highlight.type === "innovation" || highlight.type === "impact" ? (
											<strong className="text-stone-300 font-bold uppercase text-[9px] md:text-[10px] tracking-wider mr-2">
												{highlight.type}:
											</strong>
										) : null}
										{highlight.text}
									</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
