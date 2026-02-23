import { GraduationCap, Mail, MapPin, Phone, Eye, EyeOff } from "lucide-react";
import type { ProfileData } from "../types/portfolio";
import { useState } from "react";

interface ProfileProps {
	data: ProfileData;
}

const Profile = ({ data }: ProfileProps) => {
	const [showPhone, setShowPhone] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	const formatPhone = (phone: string): string => {
		const digits = phone.replace(/\D/g, "");

		if (digits.length === 10) {
			return `+977 ${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
		}

		if (digits.length === 12 && digits.startsWith("977")) {
			return `+${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(6, 9)}-${digits.slice(9)}`;
		}

		// Fallback for other lengths (e.g. international)
		return phone.startsWith("+") ? phone : `+${phone}`;
	};

	const formatPhoneHref = (phone: string): string => {
		const digits = phone.replace(/\D/g, "");
		if (digits.length === 10) {
			return `tel:+977${digits}`;
		}
		return phone.startsWith("+") ? `tel:${phone.replace(/\s/g, "")}` : `tel:+${digits}`;
	};

	const maskPhone = (phone: string): string => {
		const formatted = formatPhone(phone);
		const parts = formatted.split(" ");
		const lastPart = parts[parts.length - 1];

		if (!lastPart) return "••••••••";

		const prefix = parts.slice(0, parts.length - 1).join(" ");

		// Mask the middle section of the last part
		const masked = lastPart.length > 6
			? `${lastPart.slice(0, 3)}••••${lastPart.slice(-3)}`
			: "••••••••";

		return prefix ? `${prefix} ${masked}` : masked;
	};

	const maskEmail = (email: string): string => {
		const [user, domain] = email.split("@");
		if (!user || !domain) return "••••@••••";
		return `${user.slice(0, 2)}••••@${domain}`;
	};

	return (
		<section
			className="bento-card md:col-span-2 justify-center group"
			aria-label="Profile Information"
		>
			<div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 text-stone-400 dark:text-white pointer-events-none">
				<GraduationCap size={160} strokeWidth={1} />
			</div>
			{/* Subtle glow behind the profile text */}
			<div className="absolute top-[20%] left-[10%] w-[30%] h-[50%] bg-emerald-400/20 dark:bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

			<div className="relative z-10">
				<h1 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight mb-3 text-gradient">
					{data.name}
				</h1>
				<p className="text-stone-600 dark:text-stone-400 font-medium text-lg md:text-xl mb-8 tracking-wide transition-colors">{data.title}</p>

				<address className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-stone-600 dark:text-stone-300/80 not-italic transition-colors">
					<span className="flex items-center gap-2.5 text-stone-600 dark:text-stone-300/80 hover:text-stone-900 dark:hover:text-white transition-colors">
						<MapPin size={18} className="text-stone-400 dark:text-stone-400 transition-colors" /> {data.location}
					</span>
					<button
						onClick={() => setShowPhone(!showPhone)}
						className="flex items-center gap-2.5 text-stone-600 dark:text-stone-300/80 hover:text-stone-900 dark:hover:text-white transition-colors group/contact"
						title={showPhone ? "Hide Phone" : "Reveal Phone"}
					>
						<Phone size={18} className="text-stone-400 dark:text-stone-400 transition-colors" />
						<span className="font-mono">{showPhone ? formatPhone(data.phone) : maskPhone(data.phone)}</span>
						{showPhone ? <EyeOff size={14} className="opacity-0 group-hover/contact:opacity-50 transition-opacity" /> : <Eye size={14} className="opacity-0 group-hover/contact:opacity-50 transition-opacity" />}
						{showPhone && (
							<a
								href={formatPhoneHref(data.phone)}
								className="ml-1 p-1 hover:bg-stone-200 dark:hover:bg-white/10 rounded-md transition-colors"
								onClick={(e) => e.stopPropagation()}
								aria-label="Call"
							>
								<Phone size={14} className="text-emerald-500" />
							</a>
						)}
					</button>
					<button
						onClick={() => setShowEmail(!showEmail)}
						className="flex items-center gap-2.5 text-stone-600 dark:text-stone-300/80 hover:text-stone-900 dark:hover:text-white transition-colors group/contact"
						title={showEmail ? "Hide Email" : "Reveal Email"}
					>
						<Mail size={18} className="text-stone-400 dark:text-stone-400 transition-colors" />
						<span className="font-mono">{showEmail ? data.email : maskEmail(data.email)}</span>
						{showEmail ? <EyeOff size={14} className="opacity-0 group-hover/contact:opacity-50 transition-opacity" /> : <Eye size={14} className="opacity-0 group-hover/contact:opacity-50 transition-opacity" />}
						{showEmail && (
							<a
								href={`mailto:${data.email}`}
								className="ml-1 p-1 hover:bg-stone-200 dark:hover:bg-white/10 rounded-md transition-colors"
								onClick={(e) => e.stopPropagation()}
								aria-label="Email"
							>
								<Mail size={14} className="text-emerald-500" />
							</a>
						)}
					</button>
				</address>
			</div>
		</section>
	);
};

export default Profile;
