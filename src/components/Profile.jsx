import React from 'react';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const Profile = ({ data }) => {
    const formatPhone = (phone) => {
        const digits = String(phone || '').replace(/\D/g, '');

        if (digits.length === 10) {
            return `+977 ${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
        }

        if (digits.length === 12 && digits.startsWith('977')) {
            return `+977 ${digits.slice(3, 6)}-${digits.slice(6, 9)}-${digits.slice(9)}`;
        }

        return phone;
    };

    const formatPhoneHref = (phone) => {
        const digits = String(phone || '').replace(/\D/g, '');

        if (digits.length === 10) {
            return `+977${digits}`;
        }

        if (digits.length === 12 && digits.startsWith('977')) {
            return `+${digits}`;
        }

        return digits || phone || '';
    };

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
                    <a className="flex items-center gap-2 hover:text-stone-800 transition-colors" href={`tel:${formatPhoneHref(data.phone)}`}>
                        <Phone size={16} /> {formatPhone(data.phone)}
                    </a>
                    <a className="flex items-center gap-2 hover:text-stone-800 transition-colors" href={`mailto:${data.email}`}>
                        <Mail size={16} /> {data.email}
                    </a>
                </address>
            </div>
        </section>
    );
};

export default Profile;
