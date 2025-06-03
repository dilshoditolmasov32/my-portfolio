import {
  ant,
  css,
  diamond,
  figma,
  html,
  js,
  next,
  penTool,
  react,
  swiper,
  tailwandcss,
  time,
  webSearch,
} from "../../../public/images";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="block__element">
        <h2>Men haqimda</h2>
        <div className="line__block"></div>
        <p>
          Men Itolmasov Dilshodbek, veb dasturchiman. Yoshim 21da, Qashqadaryo
          viloyati Kasbi tumanida tug'ilganman. Qiziqarli, ko'p funksiyalarga
          ega va kuchli dizaynga ega dasturlar yaratishga qiziqaman.
        </p>
        <p>
          Mening vazifam - veb-saytni foydalanuvchilar uchun qulay qilish,
          jozibali dizayn va tezkorlikni ta’minlashdir. Maqsadim –
          foydalanuvchilar barcha bo‘limlardan intuitiv tarzda foydalanishi
          uchun qulay interfeys yaratishdir.
        </p>
        <button className="call__btn">
          <a href="./projects">Loyihalar</a>
          <img src={next} alt="next-icon" />
        </button>
      </section>

      <section className="soft-skills">
         <h2>Asbob-uskunalar</h2>
        <div className="line__block"></div>

        <div className="items-cards">
          <div className="item__card">
            <img src={html} alt="html icon" />
          </div>
          <div className="item__card">
            <img src={css} alt="html icon" />
          </div>
          <div className="item__card">
            <img src={js} alt="html icon" />
          </div>
          <div className="item__card">
            <img src={ant} alt="html icon" />
          </div>
          <div className="item__card">
            <img src={figma} alt="html icon" />
          </div>
          <div className="item__card">
            <img src={react} alt="html icon" />
          </div>
            <div className="item__card">
              <img src={tailwandcss} alt="html icon" />
            </div>
            <div className="item__card">
              <img src={swiper} alt="html icon" />
            </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Men nimalar qila olaman</h2>
        <div className="line__block"></div>

        <div className="cards">
          <div className="card">
            <div className="card__icon">
              <img src={webSearch} alt="web-search-icon" />
            </div>
            <div>
              <h3>Frontend Development</h3>
              <p>
                React, Tailwind CSS, JavaScript, HTML/CSS yordamida saytlar
                yarataman.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={penTool} alt="pen tool icon" />
            </div>
            <div>
              <h3>Responsive Dizayn</h3>
              <p>Barcha qurilmalarda mos ishlaydigan saytlar yarataman.</p>
            </div>
          </div>

          <div className="card">
            <div className="card__icon">
              <img src={diamond} alt="diamond icon" />
            </div>
            <div>
              <h3>Sifat</h3>
              <p>Yuqori darajada saytlarni sifatli ishlab chiqish.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={time} alt="time icon" />
            </div>
            <div>
              <h3>Tezkorlik</h3>
              <p>Qisqa muddat ichida tezkor sayt ishlab chiqish.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
