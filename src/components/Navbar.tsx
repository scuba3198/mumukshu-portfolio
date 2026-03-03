import React from "react";
import { Github, Mail, Phone } from "lucide-react";

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
    ];

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8 gap-4 md:gap-6">
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">Portfolio</span>
            </div>

            <ul className="flex items-center gap-4 md:gap-12">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`text-[10px] md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer ${activeTab === item.id ? "text-white" : "text-stone-500 hover:text-white"}`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-5 md:gap-6 text-stone-500">
                <a href="mailto:phoenixrising656@gmail.com" className="hover:text-white transition-colors">
                    <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
                <a href="tel:+9779862329617" className="hover:text-white transition-colors" title="Call">
                    <Phone size={14} className="md:w-[16px] md:h-[16px]" />
                </a>
                <a href="https://github.com/scuba3198" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
            </div>

        </nav>
    );

};

export default Navbar;
