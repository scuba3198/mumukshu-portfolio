import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Profile = ({ data }) => {
    return (
        <section className="bento-card bg-white md:col-span-2 justify-center group" aria-label="Profile Information">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">{data.name}</h1>
                <p className="text-stone-500 font-medium text-lg mb-6">{data.title}</p>

                <address className="flex flex-wrap gap-4 text-sm font-medium text-stone-600 not-italic">
                    <span className="flex items-center gap-2">
                        <MapPin size={16} /> {data.location}
                    </span>
                </address>
            </div>
        </section>
    );
};

export default Profile;
