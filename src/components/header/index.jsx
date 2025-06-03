  import { gmail, github2, menuBar } from "../../../public/images";
import "./index.css";
const Index = () => {
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Index
