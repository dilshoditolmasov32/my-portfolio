
import "./Project.css"
import { crmadmin, milliybiz, reytinguz, ttv } from "../../../public/images";

const projects = [
  {
    id: 1,
    title: "Milliy Biz online shop",
    status: "Yuqori",
    statusColor: "#ff4d4d",
    image: milliybiz,
    tags: ["#reactjs", "#vite", "#css3", "#axios", "#toastify", "#swiperjs"],
    links: {
      preview: "https://milliy-biz-online.vercel.app/",
      github: "https://github.com/dilshoditolmasov32/milliy-biz-online",
    },
  },
  {
    id: 2,
    title: "CRM admin panel",
    status: "Top",
    statusColor: "#ff4d4d",
    image: crmadmin,
    tags: [
      "#reactjs",
      "#vite",
      "#tailwindcss",
      "#axios",
      "#toastify",
      "#antdesign",
      "#input-mask",
      "#swiperjs",
    ],
    links: {
      preview: "https://crm-admin-panel-three.vercel.app/",
      code: "https://github.com/dilshoditolmasov32/online-shop-admin-panel",
    },
  },
  {
    id: 3,
    title: "Televizion texnologiyalar fakulteti veb sayti",
    status: "Past",
    statusColor: "#4dff91",
    image: ttv,
    tags: [
      "#reactjs",
      "#vite",
      "#tailwindcss",
      "#axios",
      "#toastify",
      "#antdesign",
      "#input-mask",
      "#swiperjs",
    ],
    links: {
      preview: "https://tuit-ttv.vercel.app/",
      code: "https://github.com/dilshoditolmasov32/tuit-ttv",
    },
  },
  {
    id: 4,
    title: "Mini contact app",
    status: "Past",
    statusColor: "#4dff91",
    image: reytinguz,
    tags: [
      "#reactjs",
      "#vite",
      "#tailwindcss",
      "#axios",
      "#toastify",
      "#antdesign",
      "#input-mask",
      "#swiperjs",
    ],
    links: {
      preview: "https://reyting-uz.vercel.app/",
      code: "https://gitlab.com/dilshodbek0404/reyting-uz",
    },
  },
];



const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
  </svg>
);

const ProjectsPage = () => {
  

  return (
    <>
      <div className="page">
        <div className="content">
          <div className="header">
            <h1 className="title">Loyihalar</h1>
            <div className="title-underline" />
          </div>

          

          <div className="grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card"
               
              >
                <div className="img-wrap">
                  <img src={project.image} alt={project.title} />
                  <div className="img-overlay">
                    {project.links.preview && (
                      <a
                        href={project.links.preview}
                        className="icon-btn"
                        title="Preview"
                        target="_blank"
                      >
                        <EyeIcon />
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="icon-btn"
                        title="Source"
                      >
                        <LinkIcon />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="icon-btn"
                        title="GitHub"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-footer">
                    <span className="card-title">{project.title}</span>
                    <span className="status">
                      {project.status}
                      <span
                        className="status-dot"
                        style={{
                          backgroundColor: project.statusColor,
                          color: project.statusColor,
                        }}
                      />
                    </span>
                  </div>

                  {project.tags.length > 0 && (
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Telegram Banner */}
          <div className="tg-banner">
            <div className="tg-icon">
              <TelegramIcon />
            </div>
            <div className="tg-text">
              <div className="tg-title">Telegram kanal</div>
              <div className="tg-desc">
                Barcha loyihalarimni telegram kanalimda ham kuzatib borishingiz
                mumkin!
              </div>
              <a href="https://t.me/developer_dilshodbey"  target="_blank" className="tg-btn">
                Ta'shrif buyurish
              </a>
            </div>
            <div className="tg-megaphone">📣</div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProjectsPage