import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/profile.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Hiago Mendes" />
      <p className="title subtitle">Software Engineer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="/Hiago De Oliveira Mendes - Curriculo.pdf"
        className="btn"
        download="Hiago De Oliveira Mendes - Curriculo.pdf"
      >
        Download currículo
      </a>

      <nav className="menu">
        <ul>
          <li>
            <a href="#about">Sobre Mim</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#education">Educação</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#technologies">Tecnologias</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
