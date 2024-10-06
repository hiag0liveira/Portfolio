import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "../styles/components/header.sass";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header mobile-header">
      <h1>
        <MdOutlineArrowBackIos className="arrow" />
        Hiago Mendes /
        <MdOutlineArrowForwardIos className="arrow" />
      </h1>
      <button className="hamburger" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
      {isMenuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#more">Saiba Mais</a>
            </li>
            <li>
              <a href="#technologies">Tecnologias</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
