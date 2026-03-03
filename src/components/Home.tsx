import React from "react";

interface HomeProps {
    name: string;
    title: string;
}

const Home: React.FC<HomeProps> = ({ name, title }) => {
    // Standardize name for the strikethrough effect (usually first name or full name uppercase)
    const nameParts = (name || "PORTFOLIO").split(" ");
    const displayName = (nameParts[0] || "PORTFOLIO").toUpperCase();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-4 overflow-hidden">
            <div className="relative mb-6 md:mb-10">
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-outline uppercase select-none leading-none strikethrough-bold">
                    {displayName}
                </h1>
            </div>
            <p className="mono text-orange-500 text-[10px] md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90 px-4">
                {title}
            </p>
        </div>
    );

};

export default Home;
