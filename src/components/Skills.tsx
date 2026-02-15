import type { SkillsData } from '../types/portfolio';

interface SkillsProps {
    skills: SkillsData;
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <section className="bento-card bg-white" aria-label="Skills">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Skills Matrix</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-xs font-bold text-stone-900 mb-2">Pedagogical</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.pedagogical.map(skill => (
                            <span key={skill} className="tag bg-white border border-stone-200 text-stone-600">{skill}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-xs font-bold text-stone-900 mb-2">Technical</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.technical.map(skill => (
                            <span key={skill} className="tag bg-stone-100 text-stone-800">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
