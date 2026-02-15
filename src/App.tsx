import Layout from './components/Layout';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';

import { portfolioData } from './data/portfolio';

function App(): React.JSX.Element {
  const { profile, projects, experience, stats, skills, education, interests } = portfolioData;

  // Split projects specific logic if needed, or find by ID
  const essayArchitect = projects.find(p => p.id === 'essay-architect')!;
  const geoflux = projects.find(p => p.id === 'geoflux')!;
  const pteClassCoverage = projects.find(p => p.id === 'pte-class-coverage')!;
  const salaryCalculator = projects.find(p => p.id === 'salary-calculator')!;
  const tmsCaptcha = projects.find(p => p.id === 'tms-captcha')!;

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
