import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Programming from "./components/Programming";
import Marquee from "./components/Marquee";
import { portfolioData } from "./data/portfolio";

function App(): React.JSX.Element {
	const [activeTab, setActiveTab] = useState("home");
	const { profile, experience, education } = portfolioData;

	const renderContent = () => {
		switch (activeTab) {
			case "home":
				return <Home name={profile.name} title={profile.title} />;
			case "experience":
				return <Experience experiences={experience} education={education} />;
			case "programming":
					return <Programming />;
			case "resume":
				return (
					<iframe
						src={`${import.meta.env.BASE_URL}Mumukshu_DC_Resume_Updated.pdf`}
						title="Mumukshu D.C. resume"
						className="w-full min-h-[75vh] rounded-lg bg-white"
					/>
				);
			default:
				return <Home name={profile.name} title={profile.title} />;
		}
	};

	return (
		<>
			<div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
				<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
				<main className="mt-8 md:mt-16">{renderContent()}</main>
			</div>
			{activeTab === "home" && <Marquee />}
		</>
	);
}

export default App;
