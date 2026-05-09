import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const OurWork = () => {
  const [active, setActive] = useState("All Projects");

  const categories = [
    "All Projects",
    "Garden Clearance",
    "Lawn Restoration",
    "Landscaping",
    "Hedges & Trees",
    "Commercial",
  ];

  const projects = [
    {
      category: "Garden Clearance",
      title: "Overgrown Garden Transformed",
      location: "Guildford, Surrey",
      before: "/Images/w1.png",
      after: "/Images/w2.png",
      quote: "Completely transformed in one day. Could not believe the result.",
      client: "Sarah M.",
    },
    {
      category: "Lawn Restoration",
      title: "Lawn Restoration Programme",
      location: "Godalming, Surrey",
      before: "/Images/w13.png",
      after: "/Images/w14.png",
      quote: "From patchy and yellow to lush and green. Incredible work.",
      client: "James R.",
    },
    {
      category: "Landscaping",
      title: "Full Garden Landscaping",
      location: "Woking, Surrey",
      before: "/Images/ho5.png",
      after: "/Images/ho6.png",
      quote: "Designed and built our dream garden. Absolutely brilliant.",
      client: "Helen T.",
    },
    {
      category: "Hedges & Trees",
      title: "Overgrown Hedge Restoration",
      location: "Farnham, Surrey",
      before: "/Images/w9.png",
      after: "/Images/w10.png",
      quote: "Hedges that had not been touched in years. Unrecognisable.",
      client: "Peter G.",
    },
    {
      category: "Commercial",
      title: "Office Grounds Maintenance",
      location: "Guildford Business Park",
      before: "/Images/w11.png",
      after: "/Images/w12.png",
      quote: "Our grounds look immaculate. Staff and clients always comment.",
      client: "Linda K.",
    },
    {
      category: "Garden Clearance",
      title: "Spring Garden Clearance",
      location: "Dorking, Surrey",
      before: "/Images/w3.png",
      after: "/Images/w4.png",
      quote: "Ready for summer in just one visit. Fantastic service.",
      client: "Carol W.",
    },
    {
      category: "Landscaping",
      title: "Patio and Border Landscaping",
      location: "Esher, Surrey",
      before: "/Images/w5.png",
      after: "/Images/w6.png",
      quote: "Exactly what we had in mind. Professional from start to finish.",
      client: "David H.",
    },
    {
      category: "Commercial",
      title: "Estate Grounds Programme",
      location: "Weybridge, Surrey",
      before: "/Images/w7.png",
      after: "/Images/w8.png",
      quote: "Consistent, reliable, and always to a high standard.",
      client: "Estate Manager",
    },
  ];

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0c1610;
          font-family: Inter, sans-serif;
        }

        .our-work-page {
          color: #fff;
          overflow: hidden;
        }

        .container-main {
          max-width: 1320px;
          margin: auto;
          padding: 0 20px;
        }

        .work-hero {
          padding: 150px 0 95px;
          text-align: center;
          background:
            radial-gradient(circle at top left, rgba(139,195,74,.16), transparent 35%),
            radial-gradient(circle at bottom right, rgba(212,170,70,.14), transparent 35%),
            linear-gradient(135deg, #0f1d14, #15251a, #0b1510);
        }

        .breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          color: #c0ccc1;
          margin-bottom: 28px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: inherit;
          text-decoration: none;
        }

        .hero-title {
          font-size: 76px;
          line-height: 1;
          font-weight: 900;
          margin-bottom: 22px;
          background: linear-gradient(to right, #fff, #b7d98c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          max-width: 760px;
          margin: auto;
          color: #bcc8bd;
          font-size: 20px;
          line-height: 1.9;
        }

        .hero-small {
          margin-top: 18px;
          color: #8bc34a;
          font-weight: 700;
        }

        .work-section {
          padding: 110px 0;
        }

        .filter-wrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }

        .filter-btn {
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: #d7e2d8;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(135deg, #5d9c42, #8bc34a);
          color: #fff;
          border-color: transparent;
          transform: translateY(-3px);
        }

        .showing-text {
          text-align: center;
          color: #8bc34a;
          font-size: 13px;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin-bottom: 48px;
          font-weight: 800;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 34px;
        }

        .project-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 34px;
          overflow: hidden;
          backdrop-filter: blur(14px);
          transition: .4s;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139,195,74,.35);
          box-shadow: 0 25px 60px rgba(0,0,0,.22);
        }

        .before-after {
          position: relative;
          height: 350px;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          touch-action: none;
          background: #142019;
        }

        .before-after img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          pointer-events: none;
        }

        .after-img {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .before-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 2;
        }

        .before-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #fff;
          z-index: 4;
          transform: translateX(-50%);
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          width: 56px;
          height: 56px;
          background: #fff;
          color: #1b2b1f;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 5;
          box-shadow: 0 12px 30px rgba(0,0,0,.25);
        }

        .image-label {
          position: absolute;
          bottom: 18px;
          z-index: 6;
          padding: 8px 14px;
          border-radius: 999px;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
          background: rgba(0,0,0,.5);
          backdrop-filter: blur(10px);
        }

        .before-label {
          left: 18px;
        }

        .after-label {
          right: 18px;
          background: rgba(139,195,74,.8);
        }

        .project-content {
          padding: 32px;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .category {
          background: rgba(139,195,74,.14);
          color: #b8e986;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #bdc9be;
          font-size: 14px;
        }

        .project-title {
          font-size: 30px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .project-quote {
          color: #bdc9be;
          line-height: 1.8;
          font-size: 17px;
          font-style: italic;
        }

        .project-footer {
          border-top: 1px solid rgba(255,255,255,.08);
          margin-top: 28px;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .stars {
          display: flex;
          color: #d9ae4c;
          gap: 3px;
          margin-bottom: 8px;
        }

        .client {
          color: #fff;
          font-weight: 800;
          font-size: 14px;
        }

        .quote-link {
          color: #8bc34a;
          text-decoration: none;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: .3s;
        }

        .quote-link:hover {
          color: #fff;
        }

        @media(max-width: 992px) {
          .project-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 52px;
          }
        }

        @media(max-width: 576px) {
          .work-hero {
            padding: 120px 0 70px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .before-after {
            height: 250px;
          }

          .project-content {
            padding: 24px;
          }

          .project-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <main className="our-work-page">
        <section className="work-hero">
          <div className="container-main">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <ArrowRight size={14} />
              <span>Our Work</span>
            </div>

            <h1 className="hero-title">Our Garden Transformations</h1>

            <p className="hero-subtitle">
              Real gardens across Surrey and South West London. Explore our
              before and after results with smooth interactive comparison.
            </p>

            <div className="hero-small">
              Every project shown is from a real garden transformation.
            </div>
          </div>
        </section>

        <section className="work-section">
          <div className="container-main">
            <div className="filter-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${active === cat ? "active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="showing-text">
              Showing {filtered.length} projects
            </div>

            <div className="project-grid">
              {filtered.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ProjectCard = ({ project }) => {
  const [position, setPosition] = useState(50);

  const moveSlider = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(5, Math.min(95, x));
    setPosition(x);
  };

  return (
    <div className="project-card">
      <div
        className="before-after"
        onMouseMove={moveSlider}
        onTouchMove={moveSlider}
      >
        <img src={project.after} alt="After" className="after-img" />

        <div className="before-wrap" style={{ width: `${position}%` }}>
          <img src={project.before} alt="Before" />
        </div>

        <div className="slider-line" style={{ left: `${position}%` }} />

        <div className="slider-handle" style={{ left: `${position}%` }}>
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
        </div>

        <span className="image-label before-label">Before</span>
        <span className="image-label after-label">After</span>
      </div>

      <div className="project-content">
        <div className="top-row">
          <span className="category">{project.category}</span>

          <div className="location">
            <MapPin size={15} />
            {project.location}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-quote">“{project.quote}”</p>

        <div className="project-footer">
          <div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>

            <div className="client">— {project.client}</div>
          </div>

          <a href="/contact" className="quote-link">
            Get similar quote
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;