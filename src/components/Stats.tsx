import React from "react";
import type { StatItem } from "../types/portfolio";

interface StatsProps {
	stats: StatItem[];
}

const Stats = ({ stats }: StatsProps) => {
	return (
		<section
			className="bento-card group relative"
			aria-label="Performance Metrics"
		>
			<h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6 transition-colors">
				Performance
			</h3>
			<div className="space-y-6">
				{stats.map((stat, idx) => (
					<React.Fragment key={stat.label}>
						<div className="group/stat">
							<div className="flex justify-between items-end mb-1">
								<span className="font-sans font-extrabold text-3xl text-stone-800 dark:text-stone-200 group-hover/stat:text-stone-900 dark:group-hover/stat:text-white transition-colors">{stat.value}</span>
								{stat.badge ? (
									<span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors">
										{stat.badge}
									</span>
								) : (
									<span className="text-xs text-stone-500 font-mono font-semibold transition-colors">
										{stat.subLabel}
									</span>
								)}
							</div>
							<p className="text-sm text-stone-600 dark:text-stone-400 font-medium group-hover/stat:text-stone-800 dark:group-hover/stat:text-stone-300 transition-colors">{stat.label}</p>
						</div>
						{idx < stats.length - 1 && (
							<div className="w-full h-px bg-stone-200 dark:bg-white/5 group-hover/stat:bg-stone-300 dark:group-hover/stat:bg-white/10 transition-colors"></div>
						)}
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Stats;
