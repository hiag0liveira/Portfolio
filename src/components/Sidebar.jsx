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
        href="/curriculo.pdf"
        className="btn"
        download="Hiago De Oliveira Mendes - Curriculo.pdf"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
