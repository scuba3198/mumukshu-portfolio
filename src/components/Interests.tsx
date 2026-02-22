import { Smile } from "lucide-react";
import type { InterestsData } from "../types/portfolio";

interface InterestsProps {
	interests: InterestsData;
}

const Interests = ({ interests }: InterestsProps) => {
	return (
		<section className="bento-card md:col-span-2 flex-row items-center justify-between group overflow-hidden relative">
			<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
			<div className="relative z-10">
				<h3 className="font-bold text-stone-800 dark:text-stone-200 text-lg uppercase tracking-widest mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-500">
					Interests
				</h3>
				<p className="text-stone-600 dark:text-stone-400 text-sm font-medium">
					{interests.list.split('•').map((item, i, arr) => (
						<span key={i}>
							<span className="group-hover:text-stone-900 dark:group-hover:text-stone-300 transition-colors">{item.trim()}</span>
							{i < arr.length - 1 && <span className="mx-2 text-stone-300 dark:text-stone-600">•</span>}
						</span>
					))}
				</p>
			</div>
			<div className="relative z-10 text-stone-300 dark:text-stone-700 group-hover:text-yellow-400/50 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-12">
				<div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
				<Smile size={48} strokeWidth={1} />
			</div>
		</section>
	);
};

export default Interests;
