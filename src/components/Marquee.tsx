import React from "react";

const Marquee: React.FC = () => {
    const message = "WELCOME TO MY PORTFOLIO • IELTS/PTE INSTRUCTOR • EDTECH DEVELOPER • LET'S CONNECT • ";

    return (
        <div className="marquee-container fixed -bottom-8 left-0 w-full z-50 pointer-events-none select-none">
            <div className="animate-marquee">
                <div className="marquee-content flex-none">
                    {message.repeat(5)}
                </div>
                <div className="marquee-content flex-none">
                    {message.repeat(5)}
                </div>
            </div>
        </div>
    );


};

export default Marquee;
