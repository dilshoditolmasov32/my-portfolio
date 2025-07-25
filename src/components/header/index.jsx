import { useState } from "react";
import Sidebar from "../sidebar"
import { gmail, github2, menuBar } from "../../../public/images";
import "./index.css";
const Index = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick=()=>{
     setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_section">
            <div className="header_menu">
              <a href="/">
                Developer.<span>Uz</span>
              </a>
            </div>
            <ul>
              <li>
                <a href="/">Bosh sahifa</a>
              </li>
              <li>
                <a href="/about">Haqida</a>
              </li>
              <li>
                <a href="/projects">Loyihalar</a>
              </li>
              <li>
                <a href="/contact">Bog'lanish</a>
              </li>
              <li>
                <a href="https://github.com/dilshoditolmasov32" target="_blank">
                  <img src={github2} alt="github-image" />
                </a>
              </li>
            </ul>

            <button className="hamburger-menu" onClick={handleClick}>
              <img src={menuBar} alt="hamburger menu" width={24} height={24} />
            </button>
          </div>
        </div>
        <Sidebar hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu}/>
      </header>
    </>
  );
};

export default Index;
