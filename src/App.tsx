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

	const getProject = (id: string) => {
		const project = projects.find((p) => p.id === id);
		if (!project) throw new Error(`Project ${id} not found`);
		return project;
	};

	const essayArchitect = getProject("essay-architect");
	const geoflux = getProject("geoflux");
	const pteClassCoverage = getProject("pte-class-coverage");
	const salaryCalculator = getProject("salary-calculator");
	const tmsCaptcha = getProject("tms-captcha");

	return (
		<Layout>
			{/* Profile Section */}
			<Profile data={profile} />

			{/* Featured Project: Essay Architect */}
			<ProjectCard project={essayArchitect} />

			{/* Work Experience */}
			<Experience experiences={experience} />

			{/* Performance Stats */}
			<Stats stats={stats} />

			{/* Skills Matrix */}
			<Skills skills={skills} />

			{/* Education */}
			<Education education={education} />

			{/* Project: Salary Calculator */}
			<ProjectCard project={salaryCalculator} />

			{/* Project: PTE Class Coverage Studio */}
			<ProjectCard project={pteClassCoverage} />

			{/* Project: GeoFlux */}
			<ProjectCard project={geoflux} />

			{/* Project: TMS Captcha Solver */}
			<ProjectCard project={tmsCaptcha} />

			{/* Interests */}
			<Interests interests={interests} />
		</Layout>
	);
}

export default App;
