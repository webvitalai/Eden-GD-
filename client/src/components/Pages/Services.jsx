import React from "react";
import {
  Scissors,
  Trash2,
  Sparkles,
  Crop,
  Droplets,
  RefreshCw,
  PenTool,
  Grid3X3,
  Flower2,
  AlignJustify,
  TreePine,
  Axe,
  Building2,
  Wind,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Garden Maintenance",
      desc: "Weekly and fortnightly premium garden care services.",
      price: "From £45/visit",
      icon: <Scissors size={24} />,
      badge: "Most Popular",
    },
    {
      title: "Garden Clearance",
      desc: "Full overgrown garden cleanup and restoration.",
      price: "From £150",
      icon: <Trash2 size={24} />,
    },
    {
      title: "Patio Cleaning",
      desc: "Professional pressure washing and weed removal.",
      price: "From £80",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Lawn Mowing",
      desc: "Professional lawn cutting, edging & strimming.",
      price: "From £35/visit",
      icon: <Crop size={24} />,
      badge: "Top Rated",
    },
    {
      title: "Lawn Treatment",
      desc: "Feed, weed control and moss treatment packages.",
      price: "From £60",
      icon: <Droplets size={24} />,
    },
    {
      title: "Lawn Restoration",
      desc: "Scarification, aeration & overseeding services.",
      price: "From £180",
      icon: <RefreshCw size={24} />,
    },
    {
      title: "Garden Design",
      desc: "Luxury bespoke landscaping and planting plans.",
      price: "From £150",
      icon: <PenTool size={24} />,
    },
    {
      title: "Patio Installation",
      desc: "Stone, porcelain and paving installation.",
      price: "From £1,800",
      icon: <Grid3X3 size={24} />,
    },
    {
      title: "Planting & Borders",
      desc: "Beautiful seasonal planting and flower beds.",
      price: "From £95",
      icon: <Flower2 size={24} />,
    },
    {
      title: "Hedge Trimming",
      desc: "Clean precise shaping for all hedge styles.",
      price: "From £65",
      icon: <AlignJustify size={24} />,
    },
    {
      title: "Tree Pruning",
      desc: "Professional pruning for healthy tree growth.",
      price: "From £120",
      icon: <TreePine size={24} />,
    },
    {
      title: "Tree Removal",
      desc: "Safe removal and complete site clearance.",
      price: "From £280",
      icon: <Axe size={24} />,
      badge: "Free Assessment",
    },
    {
      title: "Grounds Maintenance",
      desc: "Commercial grounds contracts for businesses.",
      price: "From £180/month",
      icon: <Building2 size={24} />,
    },
    {
      title: "Leaf Clearance",
      desc: "Seasonal leaf collection and disposal service.",
      price: "From £65",
      icon: <Wind size={24} />,
    },
  ];

  return (
    <>
      <style>{`

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        background:#0f1d14;
        font-family:Inter,sans-serif;
      }

      .services-page{
        overflow:hidden;
        color:#fff;
      }

      .container-main{
        max-width:1320px;
        margin:auto;
        padding:0 20px;
      }

      /* HERO */

      .services-hero{
        padding:150px 0 100px;
        position:relative;
        background:
        radial-gradient(circle at top left, rgba(118,176,65,.2), transparent 35%),
        radial-gradient(circle at bottom right, rgba(212,169,70,.15), transparent 35%),
        linear-gradient(135deg,#102016,#15281b,#0f1d14);
      }

      .breadcrumb{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        margin-bottom:25px;
        color:#b7c3b7;
      }

      .breadcrumb a{
        color:#b7c3b7;
        text-decoration:none;
      }

      .hero-center{
        text-align:center;
      }

      .hero-title{
        font-size:72px;
        font-weight:900;
        line-height:1;
        margin-bottom:24px;
        background:linear-gradient(to right,#ffffff,#b7d38b);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-subtitle{
        max-width:760px;
        margin:auto;
        color:#bfc9bf;
        font-size:20px;
        line-height:1.9;
        margin-bottom:40px;
      }

      .hero-buttons{
        display:flex;
        justify-content:center;
        gap:20px;
        flex-wrap:wrap;
      }

      .btn-main{
        background:linear-gradient(135deg,#5e9f45,#8bc34a);
        color:#fff;
        text-decoration:none;
        padding:17px 34px;
        border-radius:18px;
        font-weight:800;
        transition:.3s;
        box-shadow:0 15px 35px rgba(139,195,74,.25);
      }

      .btn-main:hover{
        transform:translateY(-4px);
      }

      .btn-outline{
        border:1px solid rgba(255,255,255,.2);
        color:#fff;
        text-decoration:none;
        padding:17px 34px;
        border-radius:18px;
        font-weight:800;
        transition:.3s;
        background:rgba(255,255,255,.04);
        backdrop-filter:blur(10px);
      }

      .btn-outline:hover{
        background:#fff;
        color:#111;
      }

      /* SERVICES */

      .services-section{
        padding:100px 0;
      }

      .services-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px;
      }

      .service-card{
        position:relative;
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:30px;
        padding:32px;
        overflow:hidden;
        transition:.4s;
        backdrop-filter:blur(12px);
      }

      .service-card::before{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(135deg,rgba(139,195,74,.12),transparent);
        opacity:0;
        transition:.4s;
      }

      .service-card:hover::before{
        opacity:1;
      }

      .service-card:hover{
        transform:translateY(-10px);
        border-color:rgba(139,195,74,.35);
      }

      .service-top{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        margin-bottom:24px;
      }

      .service-icon{
        width:72px;
        height:72px;
        border-radius:24px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:linear-gradient(135deg,#5e9f45,#8bc34a);
        color:#fff;
        box-shadow:0 15px 30px rgba(139,195,74,.2);
      }

      .badge{
        background:rgba(139,195,74,.15);
        border:1px solid rgba(139,195,74,.25);
        color:#b8e986;
        padding:8px 14px;
        border-radius:999px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
      }

      .service-title{
        font-size:28px;
        font-weight:800;
        margin-bottom:14px;
      }

      .service-desc{
        color:#bfc9bf;
        line-height:1.8;
        margin-bottom:28px;
      }

      .service-bottom{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
        flex-wrap:wrap;
      }

      .price{
        font-size:24px;
        font-weight:900;
        color:#b8e986;
      }

      .quote-btn{
        text-decoration:none;
        padding:13px 22px;
        border-radius:14px;
        background:#fff;
        color:#111;
        font-weight:800;
        transition:.3s;
      }

      .quote-btn:hover{
        background:#8bc34a;
        color:#fff;
      }

      /* CTA */

      .cta{
        padding:90px 0;
        background:
        linear-gradient(rgba(15,29,20,.92),rgba(15,29,20,.92)),
        url('/Images/h2.jpeg');
        background-size:cover;
        background-position:center;
      }

      .cta-box{
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.08);
        border-radius:40px;
        padding:60px;
        backdrop-filter:blur(14px);
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:40px;
      }

      .cta-title{
        font-size:52px;
        font-weight:900;
        margin-bottom:18px;
      }

      .cta-text{
        color:#c0c9c1;
        max-width:620px;
        line-height:1.8;
      }

      .cta-actions{
        display:flex;
        flex-direction:column;
        gap:18px;
      }

      .cta-btn{
        min-width:220px;
        padding:16px 24px;
        border-radius:18px;
        text-decoration:none;
        font-weight:800;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:12px;
        transition:.3s;
      }

      .call{
        background:#8bc34a;
        color:#fff;
      }

      .whatsapp{
        background:#25D366;
        color:#fff;
      }

      .cta-btn:hover{
        transform:translateY(-4px);
      }

      @media(max-width:1100px){

        .services-grid{
          grid-template-columns:repeat(2,1fr);
        }

        .cta-box{
          flex-direction:column;
          text-align:center;
        }

      }

      @media(max-width:768px){

        .hero-title{
          font-size:48px;
        }

        .hero-subtitle{
          font-size:17px;
        }

        .services-grid{
          grid-template-columns:1fr;
        }

        .service-card{
          padding:26px;
        }

        .cta-title{
          font-size:38px;
        }

        .cta-box{
          padding:36px 24px;
        }

        .cta-actions{
          width:100%;
        }

        .cta-btn{
          width:100%;
        }

      }

      `}</style>

      <div className="services-page">

        {/* HERO */}

        <section className="services-hero">
          <div className="container-main">

            <div className="hero-center">

              <div className="breadcrumb">
                <a href="/">Home</a>
                <ChevronRight size={16} />
                <span>Services</span>
              </div>

              <h1 className="hero-title">
                Luxury Garden
                <br />
                Services
              </h1>

              <p className="hero-subtitle">
                Professional landscaping, lawn care and garden maintenance
                services designed to keep your outdoor spaces beautiful all year round.
              </p>

              <div className="hero-buttons">
                <a href="/contact" className="btn-main">
                  Get Free Quote
                </a>

                <a href="/packages" className="btn-outline">
                  View Packages
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* SERVICES */}

        <section className="services-section">

          <div className="container-main">

            <div className="services-grid">

              {services.map((service, index) => (
                <div className="service-card" key={index}>

                  <div className="service-top">

                    <div className="service-icon">
                      {service.icon}
                    </div>

                    {service.badge && (
                      <div className="badge">
                        {service.badge}
                      </div>
                    )}

                  </div>

                  <div className="service-title">
                    {service.title}
                  </div>

                  <div className="service-desc">
                    {service.desc}
                  </div>

                  <div className="service-bottom">

                    <div className="price">
                      {service.price}
                    </div>

                    <a href="/contact" className="quote-btn">
                      Get Quote
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <div className="container-main">

            <div className="cta-box">

              <div>

                <h2 className="cta-title">
                  Need Help Choosing
                  <br />
                  The Right Service?
                </h2>

                <p className="cta-text">
                  Speak with our landscaping specialists for expert guidance,
                  free recommendations and tailored garden solutions.
                </p>

              </div>

              <div className="cta-actions">

                <a href="tel:01483726400" className="cta-btn call">
                  <Phone size={20} />
                  Call Us
                </a>

                <a
                  href="https://wa.me/447700900284"
                  className="cta-btn whatsapp"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Services;