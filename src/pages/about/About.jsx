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
  vuejs,
  typescript,
  nuxtjs,
  nextjs
} from "../../../public/images";
import { Link } from "react-router-dom";
import "./About.css";

const TOOLS = [
  { img: html, label: "HTML5", alt: "html" },
  { img: css, label: "CSS3", alt: "css" },
  { img: vuejs, label: "Vue JS", alt: "vue" },
  { img: nuxtjs, label: "Nuxt JS", alt: "nuxt" },
  { img: js, label: "JavaScript", alt: "js" },
  { img: ant, label: "Ant Design", alt: "ant" },
  { img: figma, label: "Figma", alt: "figma" },
  { img: react, label: "React", alt: "react" },
  { img: tailwandcss, label: "Tailwind CSS", alt: "tailwind" },
  { img: swiper, label: "Swiper", alt: "swiper" },
  { img: nextjs, label: "Next JS", alt: "nextjs" },
  { img: typescript, label: "TypeScript", alt: "typescript" },
];

const SKILLS = [
  {
    icon: webSearch,
    alt: "web",
    title: "Frontend Development",
    desc: "I build modern websites using React, Tailwind CSS, JavaScript, and HTML/CSS.",
  },
  {
    icon: penTool,
    alt: "pen",
    title: "Responsive Design",
    desc: "I create websites that work seamlessly across all devices.",
  },
  {
    icon: diamond,
    alt: "diamond",
    title: "Quality",
    desc: "I ensure high-quality development with clean and maintainable code.",
  },
  {
    icon: time,
    alt: "time",
    title: "Fast Delivery",
    desc: "I deliver projects efficiently within short timeframes.",
  },
];

const SectionHeader = ({ title }) => (
  <div className="section__header">
    <h2>{title}</h2>
    <span className="accent__line" />
  </div>
);

const About = () => (
  <div className="about-page">
    <section className="bio fade-up">
      <SectionHeader title="About Me" />
      <p>
        My name is Itolmasov Dilshodbek, and I am a Frontend React.js developer.
        I am 22 years old and was born in Kasbi district, Kashkadarya region.
        Currently, I am doing an internship as a Frontend Vue.js developer at
        the Ministry of Economy and Finance of Uzbekistan. I have successfully
        completed the Frontend React.js course at Najot Ta'lim.
      </p>
      <p>
        I am passionate about building modern, feature-rich, and visually
        appealing websites. My goal is to create intuitive, engaging, and
        high-performance user interfaces.
      </p>
      <Link to="/projects" className="cta__btn">
        Projects
        <img src={next} alt="arrow" />
      </Link>
    </section>

    <section className="tools fade-up">
      <SectionHeader title="Tech Stack" />
      <div className="tools__grid">
        {TOOLS.map(({ img, label, alt }) => (
          <div className="tool__card" key={label}>
            <img src={img} alt={alt} />
            <span className="tool__label">{label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="skills fade-up">
      <SectionHeader title="What I Can Do" />
      <div className="skills__grid">
        {SKILLS.map(({ icon, alt, title, desc }) => (
          <div className="skill__card" key={title}>
            <div className="skill__icon">
              <img src={icon} alt={alt} />
            </div>
            <div className="skill__body">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
