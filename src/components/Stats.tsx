import React from "react";
import type { StatItem } from "../types/portfolio";

interface StatsProps {
	stats: StatItem[];
}

const Stats = ({ stats }: StatsProps) => {
	return (
		<section
			className="bento-card bg-stone-50 border-stone-200"
			aria-label="Performance Metrics"
		>
			<h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
				Performance
			</h3>
			<div className="space-y-4">
				{stats.map((stat, idx) => (
					<React.Fragment key={stat.label}>
						<div>
							<div className="flex justify-between items-end mb-1">
								<span className="font-bold text-2xl">{stat.value}</span>
								{stat.badge ? (
									<span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">
										{stat.badge}
									</span>
								) : (
									<span className="text-xs text-stone-500 font-mono">
										{stat.subLabel}
									</span>
								)}
							</div>
							<p className="text-xs text-stone-500">{stat.label}</p>
						</div>
						{idx < stats.length - 1 && (
							<div className="w-full h-px bg-stone-200"></div>
						)}
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Stats;
