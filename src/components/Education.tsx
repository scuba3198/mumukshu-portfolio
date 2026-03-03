import React from "react";
import type { PortfolioData } from "../types/portfolio";

interface EducationProps {
	education: PortfolioData["education"];
}

const Education: React.FC<EducationProps> = ({ education }) => {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="section-title">Education</h2>
			<div className="flex flex-col">
				{education.map((edu, idx) => (
					<div key={idx} className="list-item-container flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2 w-full group">
						<div className="w-full">
							<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
								{edu.degree}
							</h3>
							<p className="text-stone-400 text-sm md:text-base">{edu.institution}</p>
						</div>
						<span className="mono text-[10px] md:text-xs uppercase tracking-widest text-stone-500 whitespace-nowrap">
							{edu.year}
						</span>
					</div>
				))}

			</div>
		</div>
	);
};

export default Education;
