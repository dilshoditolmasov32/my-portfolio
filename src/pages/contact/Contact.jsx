import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { gmail2, phone2, telegram2 } from "../../../public/images";
import "./Contact.css";

const CONTACTS = [
  {
    icon: gmail2,
    title: "Email",
    value: "dilshoditolmasov32@gmail.com",
    href: "mailto:dilshoditolmasov32@gmail.com",
  },
  {
    icon: telegram2,
    title: "Telegram",
    value: "Dilshodbek Itolmasov",
    href: "https://t.me/@dilshodbek_developer",
  },
  {
    icon: phone2,
    title: "Phone",
    value: "+998 (93) 571 14 42",
    href: "tel:+998935711442",
  },
];

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    className="contact__card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="contact__icon">
      <img src={icon} alt={title} />
    </div>
    <h4>{title}</h4>
    <span>{value}</span>
  </a>
);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Xabar muvaffaqiyatli yuborildi!", {
            duration: 4000,
            style: {
              background: "#1b1b1b",
              color: "#fff",
              border: "1px solid rgba(62, 235, 14, 0.5)",
            },
          });
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.", {
            duration: 4000,
            style: {
              background: "#1b1b1b",
              color: "#fff",
              border: "1px solid rgba(255, 0, 0, 0.5)",
            },
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact__page">
        <h2>Contact</h2>
        <div className="line__block"></div>

        <div className="contact__cards">
          {CONTACTS?.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="contact__page__forma">
        <h2>Send a Message</h2>
        <div className="line__block"></div>

        <form ref={form} onSubmit={sendEmail} className="skills-section">
          <div className="text__input">
            <div>
              <label htmlFor="name">Your Name*</label> <br />
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Dilshodbek"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Your Email*</label> <br />
              <input
                type="email"
                name="user_email" 
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <label htmlFor="textarea">Your Message*</label> <br />
          <textarea
            name="message" 
            id="textarea"
            placeholder="Write your message..."
            rows="5"
            cols="30"
            required
          ></textarea>
          <button type="submit" id="form_button" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

