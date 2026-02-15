import type { ExperienceItem } from '../types/portfolio';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
    experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
    return (
        <section className="bento-card bg-white md:col-span-2 md:row-span-2" aria-labelledby="work-heading">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4 sticky top-0 bg-white z-10">
                <div className="p-2 bg-stone-100 rounded-lg">
                    <Briefcase size={20} />
                </div>
                <h3 id="work-heading" className="font-bold text-lg">Work Experience</h3>
            </div>

            <div className="space-y-8 overflow-y-auto custom-scrollbar pr-2 h-full max-h-[600px]">
                {experiences.map((job) => (
                    <article key={job.id} className="relative pl-4 border-l-2 border-stone-200">
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${job.color} border-4 border-white`}></div>
                        <header className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-base">{job.company}</h4>
                            <time className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded">
                                {job.period}
                            </time>
                        </header>
                        <p className="text-sm font-semibold text-stone-600 mb-2">{job.role}</p>
                        {job.description.includes("Innovation:") || job.description.includes("Impact:") ? (
                            <ul className="text-sm text-stone-600 space-y-2 list-disc list-outside ml-4">
                                {job.description.split('. ').map((sentence: string, idx: number) => {
                                    if (!sentence) return null;
                                    // Simple parsing to identifying bullet points if they were manually structured in data or just splitting sentences
                                    // The data has clean sentences. Let's just render the description as paragraph if not list.
                                    // Actually data has "Innovation:" which was a list item in HTML.
                                    // I will just simple render as paragraph for now to avoid complexity or split by known keywords.
                                    return <li key={idx} dangerouslySetInnerHTML={{ __html: sentence.replace("Innovation:", "<strong>Innovation:</strong>").replace("Impact:", "<strong>Impact:</strong>") }} />
                                })}
                            </ul>
                        ) : (
                            <p className="text-sm text-stone-600">{job.description}</p>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
