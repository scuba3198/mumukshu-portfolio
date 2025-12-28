import React from 'react';
import { Smile } from 'lucide-react';

const Interests = ({ interests }) => {
    return (
        <section className="bento-card bg-yellow-400 border-yellow-500 md:col-span-2 flex-row items-center justify-between">
            <div>
                <h3 className="font-black text-stone-900 text-lg uppercase tracking-tight">Interests</h3>
                <p className="text-stone-800 text-sm font-medium opacity-90">{interests.list}</p>
            </div>
            <Smile className="text-stone-900 opacity-20" size={48} />
        </section>
    );
};

export default Interests;
