import { useState } from "react";
import Sidebar from "../sidebar";
import { github2, menuBar } from "../../../public/images";
import { FaHome, FaInfo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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

            {/* NAVIGATION */}
            <ul>
              <li>
                <NavLink to="/">
                  <span>
                    <FaHome />
                  </span>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about">
                  <span>
                    <FaInfo />
                  </span>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects">
                  <span>
                    <GrProjects />
                  </span>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact">
                  <span>
                    <IoCall />
                  </span>
                  Contact
                </NavLink>
              </li>

              {/* GITHUB */}
              <li>
                <a
                  href="https://github.com/dilshoditolmasov32"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github2} alt="github" />
                </a>
              </li>
            </ul>

            {/* HAMBURGER */}
            <button 
              className={`hamburger-menu ${isMenuOpen ? "active" : ""}`} 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

      </header>
      {/* SIDEBAR */}
      <Sidebar hamburgerMenu={isMenuOpen} setHamburgerMenu={setIsMenuOpen} />
    </>
  );
};

export default Header;
