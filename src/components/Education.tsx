import { BookOpen } from "lucide-react";
import type { EducationItem } from "../types/portfolio";

interface EducationProps {
	education: EducationItem[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<section
			className="bento-card md:col-span-2 group"
			aria-labelledby="edu-heading"
		>
			<div className="flex items-center gap-3 mb-6">
				<div className="p-2.5 bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-xl text-stone-600 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white group-hover:bg-stone-900/10 dark:group-hover:bg-white/10 transition-all duration-500">
					<BookOpen size={20} strokeWidth={1.5} />
				</div>
				<h3 id="edu-heading" className="font-bold text-xl text-stone-800 dark:text-stone-200 transition-colors">
					Education & Certifications
				</h3>
			</div>
			<div className="grid md:grid-cols-2 gap-6 relative z-10">
				{education.map((edu) => (
					<article key={`${edu.degree}-${edu.institution}`} className="group/item p-4 rounded-2xl bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/5 hover:bg-stone-900/10 dark:hover:bg-white/10 hover:border-stone-300 dark:hover:border-white/20 transition-all duration-300">
						<h4 className="font-bold text-base text-stone-800 dark:text-stone-200 group-hover/item:text-stone-900 dark:group-hover/item:text-white mb-1 transition-colors">{edu.degree}</h4>
						<p className="text-sm text-stone-600 dark:text-stone-400 mb-3 transition-colors">{edu.institution}</p>
						<time className="inline-block text-[11px] font-mono font-semibold bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-2.5 py-1 rounded-md text-emerald-600 dark:text-emerald-400 transition-colors">
							{edu.year}
						</time>
					</article>
				))}
			</div>
		</section>
	);
};

export default Education;
