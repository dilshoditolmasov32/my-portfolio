import { next } from "../../../public/images";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-page">
     <div className="hero-page__block">
  <h1>
    Hello, I'm <span>Itolmasov Dilshodbek</span>
  </h1>


  <p className="user-text">
    Frontend Developer & UI/UX enthusiast focused on building modern and
    user-centered web applications.
  </p>


  <ol className="hero__highlights">
    <li>
      Transforming ideas into clean, functional, and visually engaging digital
      experiences
    </li>
    <li>
      Strong foundation in React, JavaScript, and Tailwind CSS
    </li>
    <li>
      Building responsive, high-performance, and scalable interfaces
    </li>
    <li>
      Focus on usability, design principles, and performance optimization
    </li>
  </ol>


  <p className="hero__philosophy">
    I don’t just write code — I build products that are intuitive, fast, and
    valuable for real users.
  </p>

  <p className="hero__focus">
    Currently improving my skills in frontend architecture, modern frameworks,
    and real-world problem solving.
  </p>

  <div className="button__wrapper">
    <Link to="/about" className="about__btn">
      About Me
      <img src={next} alt="next-icon" />
    </Link>
  </div>
</div>
    </div>
  );
};

export default Hero;
