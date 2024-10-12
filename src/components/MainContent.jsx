import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import "../styles/components/maincontent.sass";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <section id="about">
        <AboutContainer />
      </section>

      <section id="experience">
        <ExperienceContainer />
      </section>

      <section id="education">
        <EducationContainer />
      </section>

      <section id="projects">
        <ProjectsContainer />
      </section>

      <section id="technologies">
        <TechnologiesContainer />
      </section>
    </main>
  );
};

export default MainContent;
