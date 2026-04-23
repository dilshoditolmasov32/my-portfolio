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
  nuxtjs
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
  { img: tailwandcss, label: "Tailwind", alt: "tailwind" },
  { img: swiper, label: "Swiper", alt: "swiper" },
  { img: swiper, label: "Next JS", alt: "nextjs" },
  { img: typescript, label: "TypeScript", alt: "typescript" },
];

const SKILLS = [
  {
    icon: webSearch,
    alt: "web",
    title: "Frontend Development",
    desc: "React, Tailwind CSS, JavaScript, HTML/CSS yordamida saytlar yarataman.",
  },
  {
    icon: penTool,
    alt: "pen",
    title: "Responsive Dizayn",
    desc: "Barcha qurilmalarda mos ishlaydigan saytlar yarataman.",
  },
  {
    icon: diamond,
    alt: "diamond",
    title: "Sifat",
    desc: "Yuqori darajada saytlarni sifatli ishlab chiqish.",
  },
  {
    icon: time,
    alt: "time",
    title: "Tezkorlik",
    desc: "Qisqa muddat ichida tezkor sayt ishlab chiqish.",
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
      <SectionHeader title="Men haqimda" />
      <p>
        Men Itolmasov Dilshodbek, Frontend React.js dasturchiman. Yoshim 22da,
        Qashqadaryo viloyati Kasbi tumanida tug'ilganman. Hozirgi vaqtda
        O'zbekiston Respublikasi Iqtisodiyot va Moliya Vazirligida Frontend
        Vue.js bo'yicha amaliyot o'tamoqdaman. Najot ta'limning Frontend
        React.js kursini muvaffaqiyatli tugatganman.
      </p>
      <p>
        Men qiziqarli, ko'p funksiyalarga ega va kuchli dizaynga ega veb saytlar
        yaratishga qiziqaman. Maqsadim — foydalanuvchilar uchun intuitiv,
        jozibali va tezkor interfeys yaratishdir.
      </p>
      <Link to="/projects" className="cta__btn">
        Loyihalar
        <img src={next} alt="arrow" />
      </Link>
    </section>

  
    <section className="tools fade-up">
      <SectionHeader title="Asbob-uskunalar" />
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
      <SectionHeader title="Men nimalar qila olaman" />
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
