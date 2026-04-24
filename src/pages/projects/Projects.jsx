import "./Project.css";
import { crmadmin, milliybiz, reytinguz, ttv } from "../../../public/images";

const projects = [
  {
    id: 1,
    title: "Milliy Biz Online Shop",
    status: "High",
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
    title: "CRM Admin Panel",
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
    title: "Television Technologies Faculty Website",
    status: "Low",
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
    title: "Mini Contact App",
    status: "Low",
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

const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="content">
        <div className="header">
          <h1 className="title">Projects</h1>
          <div className="title-underline" />
        </div>

        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="img-wrap">
                <img src={project.image} alt={project.title} />
                <div className="img-overlay">
                  {project.links.preview && (
                    <a
                      href={project.links.preview}
                      className="icon-btn"
                      title="Live Preview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👁
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      className="icon-btn"
                      title="Source Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="icon-btn"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🐙
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
                      style={{ backgroundColor: project.statusColor }}
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
          <div className="tg-icon">📢</div>
          <div className="tg-text">
            <div className="tg-title">Telegram Channel</div>
            <div className="tg-desc">
              You can also follow all my projects on my Telegram channel!
            </div>
            <a
              href="https://t.me/developer_dilshodbey"
              target="_blank"
              rel="noopener noreferrer"
              className="tg-btn"
            >
              Visit Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
