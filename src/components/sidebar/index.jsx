import {
  call,
  Dilshodbey,
  github,
  gmail,
  telegram,
} from "../../../public/images";
import "./index.css"
        import { Link } from "react-router-dom";


const Index = ({ hamburgerMenu, setHamburgerMenu }) => {
 
  return (
    <>
      {hamburgerMenu && (
        <div
          className="sidebar_overlay"
          onClick={() => setHamburgerMenu && setHamburgerMenu(false)}
        ></div>
      )}
      <aside className={`left_sidebar ${hamburgerMenu ? "active" : ""}`}>
        <div className="profile_section">
          <div>
            <img
              src={Dilshodbey}
              alt="user-profile-image"
              width={280}
              height={280}
            />
          </div>
          <h1>Itolmasov Dilshodbek</h1>
          <div className="about_btns">
            <button>Veb Dasturchi </button>
            <button>Frontend Developer </button>
            <button>React.Js Dasturchi </button>
            <button>Vue.Js Dasturchi </button>
          </div>
        </div>
        <ul className="social_network_section">
          <li className="social_list">
            <Link
              to="#"
              onClick={() =>
                (window.location.href = "mailto:dilshoditolmasov32@gmail.com")
              }
              className="social_card"
            >
              <div className="icon_card-1">
                <img src={gmail} alt="gmail" />
              </div>
              <div>
                <h3>Email</h3>
                <span>dilshoditolmasov32@gmail.com</span>
              </div>
            </Link>
          </li>

          <li className="social_list">
            <Link
              to="#"
              onClick={() =>
                window.open("https://github.com/dilshoditolmasov32", "_blank")
              }
              className="social_card"
            >
              <div className="icon_card-2">
                <img src={github} alt="github" />
              </div>
              <div>
                <h3>GitHub</h3>
                <span>github.com/dilshoditolmasov32</span>
              </div>
            </Link>
          </li>

          <li className="social_list">
            <Link
              to="#"
              onClick={() =>
                window.open("https://t.me/dilshodbek_zafarovich", "_blank")
              }
              className="social_card"
            >
              <div className="icon_card-3">
                <img src={telegram} alt="telegram" />
              </div>
              <div>
                <h3>Telegram</h3>
                <span>t.me/dilshodbek_zafarovich</span>
              </div>
            </Link>
          </li>

          <li className="social_list">
            <Link
              to="#"
              onClick={() => (window.location.href = "tel:+998937027504")}
              className="social_card"
            >
              <div className="icon_card-4">
                <img src={call} alt="phone" />
              </div>
              <Link to={"tel:+998935711442"}>
                <h3>Phone</h3>
                <span>+998 (93) 571-14-42</span>
              </Link>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Index;
