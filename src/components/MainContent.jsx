import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import "../styles/components/maincontent.sass";
import EducationContainer from "./EducationContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <EducationContainer />
      <ProjectsContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
