import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/components/projectsContainer.sass";
const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao carregar projetos:", error));
  }, []);

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
