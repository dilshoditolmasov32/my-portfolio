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
            {/* LOGO */}
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
            <button className="hamburger-menu" onClick={toggleMenu}>
              <img src={menuBar} alt="menu" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <Sidebar hamburgerMenu={isMenuOpen} setHamburgerMenu={setIsMenuOpen} />
      </header>
    </>
  );
};

export default Header;
