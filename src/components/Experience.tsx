import { Briefcase } from "lucide-react";
import type { ExperienceItem } from "../types/portfolio";

interface ExperienceProps {
	experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
	return (
		<section
			className="bento-card md:col-span-2 md:row-span-2 group"
			aria-labelledby="work-heading"
		>
			<div className="flex items-center gap-4 mb-8 border-b border-stone-200 dark:border-white/10 pb-5 sticky top-0 bg-transparent backdrop-blur-md z-10 transition-colors">
				<div className="p-2.5 bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-xl text-stone-600 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white group-hover:bg-stone-900/10 dark:group-hover:bg-white/10 transition-all duration-500">
					<Briefcase size={22} strokeWidth={1.5} />
				</div>
				<h3 id="work-heading" className="font-bold text-xl text-stone-800 dark:text-stone-200 transition-colors">
					Experience Timeline
				</h3>
			</div>

			<div className="space-y-8 overflow-y-auto custom-scrollbar pr-4 h-full max-h-[600px] relative before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 dark:before:via-white/10 before:to-transparent">
				{experiences.map((job) => (
					<article
						key={job.id}
						className="relative pl-8 md:pl-0 border-l border-stone-200 dark:border-white/10 md:border-none group/item transition-colors"
					>
						{/* Glowing Timeline Dot */}
						<div
							className={`absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full ${job.isCurrent ? 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-stone-400 dark:bg-stone-600'} border-2 border-stone-100 dark:border-[#0a0a0a] transition-colors duration-500 group-hover/item:bg-stone-900 dark:group-hover/item:bg-white`}
						></div>

						<header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
							<h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 group-hover/item:text-stone-900 dark:group-hover/item:text-white transition-colors">{job.company}</h4>
							<time className="text-xs font-mono text-stone-600 dark:text-stone-400 bg-stone-900/5 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors">
								{job.period}
							</time>
						</header>
						<p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 transition-colors">
							{job.role}
						</p>
						{job.description.includes("Innovation:") ||
							job.description.includes("Impact:") ? (
							<ul className="text-sm text-stone-600 dark:text-stone-400 space-y-2 list-disc list-outside ml-4 group-hover/item:text-stone-800 dark:group-hover/item:text-stone-300 transition-colors">
								{job.description.split(". ").map((sentence: string) => {
									if (!sentence) return null;
									const hasInnovation = sentence.includes("Innovation:");
									const hasImpact = sentence.includes("Impact:");

									return (
										<li key={sentence}>
											{hasInnovation ? (
												<>
													<strong className="text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Innovation:</strong>
													{sentence.replace("Innovation:", "")}
												</>
											) : hasImpact ? (
												<>
													<strong className="text-purple-600 dark:text-purple-400 font-medium transition-colors">Impact:</strong>
													{sentence.replace("Impact:", "")}
												</>
											) : (
												sentence
											)}
										</li>
									);
								})}
							</ul>
						) : (
							<p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium group-hover/item:text-stone-800 dark:group-hover/item:text-stone-300 transition-colors">{job.description}</p>
						)}
					</article>
				))}
			</div>
		</section>
	);
};

export default Experience;
