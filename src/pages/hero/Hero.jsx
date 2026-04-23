import { next } from "../../../public/images";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
     <div className="hero-page">
      <div className="hero-page__block">
        <h1>
          Assalomu alaykum, Men <span>Itolmasov Dilshodbek</span>man
        </h1>
        <p>
          Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi.
          Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
          mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>
        <div className="button__wrapper">
          <button className="about__btn">
          <Link to="/about">Men haqimda </Link>
          <img src={next} alt="next-icon" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

