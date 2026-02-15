import type { EducationItem } from '../types/portfolio';
import { BookOpen } from 'lucide-react';

interface EducationProps {
    education: EducationItem[];
}

const Education = ({ education }: EducationProps) => {
    return (
        <section className="bento-card bg-white md:col-span-2" aria-labelledby="edu-heading">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-stone-100 rounded-lg">
                    <BookOpen size={20} />
                </div>
                <h3 id="edu-heading" className="font-bold text-lg">Education & Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                    <article key={idx}>
                        <h4 className="font-bold text-sm">{edu.degree}</h4>
                        <p className="text-xs text-stone-500 mb-1">{edu.institution}</p>
                        <time className="text-[10px] font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-500">
                            {edu.year}
                        </time>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Education;
