import {  gmail2, phone2, telegram2 } from "../../../public/images";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact__page">
        <h2>Bog'lanish</h2>
        <div className="line__block"></div>

        <div className="contact__cards">
          <div className="card_1">
            <div>
              <img src={gmail2} alt="gmail icon" />
            </div>
            <h4>E-pochta</h4>
            <a href="mailto:dilshoditolmasov32@gmail.com">
              dilshoditolmasov32@gmail{" "}
            </a>
          </div>
          <div className="card_2">
            <div>
              <img src={telegram2} alt="telegram icon" />
            </div>
            <h4>Telegram</h4>
            <a href="https://t.me/DILSHODBEK_ZAFAROVICH">
              Dilshodbek Itolmasov
            </a>
          </div>

          <div className="card_3">
            <div>
              <img src={phone2} alt="phone icon" />
            </div>
            <h4>Phone</h4>
            <a href="tel:+998937027504">+998 (93) 702 7504 </a>
          </div>
        </div>
      </section>
      <section className="contact__page__forma">
        <h2>So'rov yuborish</h2>
        <div className="line__block"></div>
        <form className="input__form">
          <div className="text__input">
            <div>
              <label htmlFor="#name">Ismingiz*</label> <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Dilshodbek"
                required
              />
            </div>
            <div>
              <label htmlFor="#name">Email manzilingiz*</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                required
              />
            </div>
          </div>
          <label htmlFor="textarea">Izohingiz*</label> <br />
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Sizning Xabaringiz"
            rows="5"
            cols="30"
            required
          ></textarea>
          <button id="form_button">Yuborish</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
