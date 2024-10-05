import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiPaintBrush } from "react-icons/hi2";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>
        <MdOutlineArrowBackIos className="arrow" />
        Hiago Mendes /
        <MdOutlineArrowForwardIos className="arrow" />
      </h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
