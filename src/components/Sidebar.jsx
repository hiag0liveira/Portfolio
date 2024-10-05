import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title subtitle">Software Engineer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="/curriculo.pdf" className="btn" download="curriculo.pdf">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
