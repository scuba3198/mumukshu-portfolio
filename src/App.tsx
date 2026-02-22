import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

import { portfolioData } from "./data/portfolio";

function App(): React.JSX.Element {
	const { profile, projects, experience, stats, skills, education, interests } =
		portfolioData;

	return (
		<Layout>
			{/* Profile Section */}
			<Profile data={profile} />

			{/* Work Experience */}
			<Experience experiences={experience} />

			{/* Projects - Render all dynamically */}
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}

			{/* Performance Stats */}
			<Stats stats={stats} />

			{/* Skills Matrix */}
			<Skills skills={skills} />

			{/* Education */}
			<Education education={education} />

			{/* Interests */}
			<Interests interests={interests} />
		</Layout>
	);
}

export default App;
