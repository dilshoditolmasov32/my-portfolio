import {
  call,
  Dilshodbey,
  github,
  gmail,
  leftIcon,
  refreshIcon,
  rightIcon,
  telegram,
} from "../../../public/images";
import "./index.css"
const Index = (props) => {
 
  return (
    <>

  
      <aside className="left_sidebar">
    
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
            <button>Talaba </button>
            <button>Junior Developer </button>
            <button>React.Js Dasturchi </button>
          </div>
        </div>
        <ul className="social_network_section">
          <li className="social_list">
            <div className="icon_card-1">
              <img src={gmail} alt="gmail" />
            </div>
            <div>
              <h3>E-pochta</h3>
              <a
                href="mailto:dilshoditolmasov32@gmail.com"
                target="_blank"
                title="dilshoditolmasov32@gmail.com"
              >
                Email
              </a>
            </div>
          </li>
          <li className="social_list">
            <div className="icon_card-2">
              <img src={github} alt="github" />
            </div>
            <div>
              <h3>Github </h3>
              <a
                href="https://github.com/dilshoditolmasov32"
                target="_blank"
                title="github.com/dilshoditolmasov32"
              >
                My Github
              </a>
            </div>
          </li>
          <li className="social_list">
            <div className="icon_card-3">
              <img src={telegram} alt="telegram" />
            </div>
            <div>
              <h3>Telegram</h3>
              <a
                href="https://t.me/dilshodbek_zafarovich
"
                target="_blank"
                title="Telegram"
              >
                t.me/dilshodbek_zafarovich
              </a>
            </div>
          </li>
          <li className="social_list">
            <div className="icon_card-4">
              <img src={call} alt="call" />
            </div>
            <div>
              <h3>Telefon raqam</h3>
              <a href="tel:+998937027504" target="_blank" title="+998937027504">
                +998 (93) 702-75-04
              </a>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Index;
