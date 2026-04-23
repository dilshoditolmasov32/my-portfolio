import { useState } from "react";
import Sidebar from "../sidebar";
import { github2, menuBar } from "../../../public/images";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {GrProjects} from "react-icons/gr"
import "./index.css";
const Index = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_section">
            <div className="header_menu">
              <NavLink to="/">
                Developer.<span>Uz</span>
              </NavLink>
            </div>
            <ul>
              <li>
                <span>
                  <FaHome />
                </span>
                <NavLink to="/">Bosh sahifa</NavLink>
              </li>
              <li>
                <span>
                  <FaInfo />
                </span>
                <NavLink to="/about">Haqida</NavLink>
              </li>
              <li>
                <span>
                  <GrProjects />
                </span>
                <NavLink to="/projects">Loyihalar</NavLink>
              </li>
              <li>
                <span>
                  <IoCall />
                </span>
                <NavLink to="/contact">Bog'lanish</NavLink>
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
        <Sidebar
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
        />
      </header>
    </>
  );
};

export default Index;
