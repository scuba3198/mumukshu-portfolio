import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROGRAMMING_URL = "https://scuba3198.github.io/scuba3198/";

const Programming: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="section-title">Curious about my code?</h2>
			<p className="text-stone-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
				Beyond teaching, I build software. My programming work, from open
				source contributions to tools I've shipped, lives on its own site.
			</p>
			<a
				href={PROGRAMMING_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-2 mono text-xs md:text-sm uppercase tracking-widest text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors"
			>
				Explore my programming work
				<ArrowUpRight
					size={16}
					className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
				/>
			</a>
		</div>
	);
};

export default Programming;
