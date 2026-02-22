import type { SkillsData } from "../types/portfolio";

interface SkillsProps {
	skills: SkillsData;
}

const Skills = ({ skills }: SkillsProps) => {
	return (
		<section className="bento-card group" aria-label="Skills">
			<h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6 transition-colors">
				Skills Matrix
			</h3>
			<div className="space-y-6">
				<div>
					<p className="text-sm font-bold text-stone-800 dark:text-stone-300 mb-3 transition-colors">Pedagogical</p>
					<div className="flex flex-wrap gap-2.5">
						{skills.pedagogical.map((skill) => (
							<span
								key={skill}
								className="tag"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<div>
					<p className="text-sm font-bold text-stone-800 dark:text-stone-300 mb-3 transition-colors">Technical</p>
					<div className="flex flex-wrap gap-2.5">
						{skills.technical.map((skill) => (
							<span key={skill} className="tag">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
