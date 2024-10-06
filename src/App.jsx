import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./styles/components/app.sass";
import Header from "./components/Header";

function App() {
  return (
    <div id="portfolio">
      <h1 className="desktop-title">
        <MdOutlineArrowBackIos className="arrow" />
        Hiago Mendes /
        <MdOutlineArrowForwardIos className="arrow" />
      </h1>
      <Header className="mobile-header" />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
