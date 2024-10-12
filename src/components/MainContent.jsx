import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import "../styles/components/maincontent.sass";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ExperienceContainer />
      <EducationContainer />
      <ProjectsContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
