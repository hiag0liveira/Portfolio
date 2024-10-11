import {
  DiBootstrap,
  DiCss3,
  DiDocker,
  DiGit,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiMysql,
  DiNodejsSmall,
  DiPostgresql,
  DiPython,
  DiReact,
  DiSass,
} from "react-icons/di";

import {
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiNestjs,
  SiSpringboot,
  SiSpringsecurity,
  SiThymeleaf,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongoose,
  SiNextdotjs,
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "nextjs", name: "Next.js", icon: <SiNextdotjs /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "tailwind", name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  { id: "nestjs", name: "NestJS", icon: <SiNestjs /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "springboot", name: "Spring Boot", icon: <SiSpringboot /> },
  { id: "flutter", name: "Flutter", icon: <SiFlutter /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "mongodb", name: "MongoDB", icon: <SiMongodb /> },
  { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
