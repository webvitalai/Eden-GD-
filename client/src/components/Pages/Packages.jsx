import React from "react";
import {
  Check,
  ArrowRight,
  MessageCircle,
  Phone,
  Crown,
  Sparkles,
  ShieldCheck,
  Building2,
} from "lucide-react";

const Packages = () => {
  const residential = [
    {
      name: "Essential",
      price: "£85",
      period: "/month",
      visits: "Monthly Visits",
      badge: "Starter",
      btn: "outline",
      best: "Small low-maintenance gardens",
      features: [
        "Lawn mowing & edging",
        "Path & patio sweep",
        "Basic weed control",
        "Garden tidy-up",
        "Monthly visit report",
      ],
    },
    {
      name: "Standard",
      price: "£140",
      period: "/month",
      visits: "Fortnightly Visits",
      badge: "Most Popular",
      popular: true,
      btn: "solid",
      best: "Average family gardens",
      features: [
        "Everything in Essential",
        "Hedge trimming",
        "Bed weeding & tidying",
        "Priority bookings",
        "Seasonal planting advice",
        "Direct gardener contact",
      ],
    },
    {
      name: "Premium",
      price: "£280",
      period: "/month",
      visits: "Weekly Visits",
      badge: "Luxury",
      btn: "dark",
      best: "Large premium gardens",
      features: [
        "Everything in Standard",
        "Full lawn treatment",
        "Seasonal colour planting",
        "Dedicated gardener",
        "Garden health reports",
        "Winter planning support",
      ],
    },
  ];

  const commercial = [
    {
      title: "Grounds Basic",
      price: "£180",
      period: "/month",
      tags: ["Retail", "Offices", "Clinics"],
      features: [
        "Grounds maintenance",
        "Lawn care",
        "Litter removal",
        "Monthly reports",
      ],
    },
    {
      title: "Grounds Full",
      price: "£350",
      period: "/month",
      featured: true,
      tags: ["Schools", "Hotels", "Housing"],
      features: [
        "Weekly maintenance",
        "Compliance documents",
        "Seasonal planting",
        "Dedicated manager",
        "24/7 contact line",
      ],
    },
    {
      title: "Estate Management",
      price: "POA",
      period: "",
      tags: ["Councils", "Developers", "Associations"],
      features: [
        "Estate maintenance",
        "Multi-team deployment",
        "Reactive support",
        "Full reporting",
      ],
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
        background:#0c1610;
        font-family:Inter,sans-serif;
      }

      .packages-page{
        color:#fff;
        overflow:hidden;
      }

      .container-main{
        width:100%;
        max-width:1320px;
        margin:auto;
        padding:0 20px;
      }

      /* HERO */

      .hero{
        padding:150px 0 100px;
        text-align:center;
        background:
        radial-gradient(circle at top left,rgba(139,195,74,.14),transparent 35%),
        radial-gradient(circle at bottom right,rgba(214,180,74,.14),transparent 35%),
        linear-gradient(135deg,#0f1d14,#15251a,#0b1510);
      }

      .breadcrumb{
        display:inline-flex;
        align-items:center;
        gap:10px;
        padding:10px 18px;
        border-radius:999px;
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.08);
        color:#c0ccc1;
        margin-bottom:28px;
        font-size:14px;
      }

      .hero-title{
        font-size:76px;
        line-height:1;
        font-weight:900;
        margin-bottom:22px;
        background:linear-gradient(to right,#fff,#b7d98c);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-text{
        max-width:760px;
        margin:auto;
        font-size:20px;
        color:#bcc8bd;
        line-height:1.9;
        margin-bottom:26px;
      }

      .whatsapp-help{
        display:inline-flex;
        align-items:center;
        gap:10px;
        color:#8bc34a;
        text-decoration:none;
        font-weight:700;
      }

      /* SECTION */

      .section{
        padding:120px 0;
      }

      .section-center{
        text-align:center;
        margin-bottom:70px;
      }

      .section-kicker{
        color:#8bc34a;
        font-size:13px;
        font-weight:800;
        letter-spacing:.18em;
        margin-bottom:18px;
      }

      .section-title{
        font-size:58px;
        font-weight:900;
        margin-bottom:16px;
      }

      .section-subtitle{
        color:#b8c4b9;
        font-size:18px;
      }

      /* PACKAGES */

      .packages-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px;
        align-items:stretch;
      }

      .package-card{
        position:relative;
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:36px;
        padding:38px;
        backdrop-filter:blur(16px);
        transition:.4s;
        overflow:hidden;
      }

      .package-card::before{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(135deg,rgba(139,195,74,.08),transparent);
        opacity:0;
        transition:.4s;
      }

      .package-card:hover::before{
        opacity:1;
      }

      .package-card:hover{
        transform:translateY(-10px);
      }

      .popular{
        border:2px solid #8bc34a;
        transform:scale(1.04);
        box-shadow:0 20px 50px rgba(139,195,74,.15);
      }

      .popular:hover{
        transform:scale(1.04) translateY(-10px);
      }

      .badge{
        width:max-content;
        padding:8px 16px;
        border-radius:999px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        margin-bottom:30px;
      }

      .badge.green{
        background:rgba(139,195,74,.15);
        color:#b8e986;
      }

      .badge.gold{
        background:linear-gradient(135deg,#c8a85b,#f1d28a);
        color:#111;
      }

      .badge.dark{
        background:#1c2b20;
        color:#fff;
      }

      .price-wrap{
        margin-bottom:30px;
      }

      .price-line{
        display:flex;
        align-items:flex-end;
        gap:8px;
      }

      .price{
        font-size:72px;
        line-height:1;
        font-weight:900;
      }

      .period{
        color:#b7c3b8;
        font-size:20px;
        margin-bottom:10px;
      }

      .visit{
        color:#8bc34a;
        margin-top:10px;
        font-weight:700;
      }

      .divider{
        height:1px;
        background:rgba(255,255,255,.08);
        margin:30px 0;
      }

      .feature-list{
        display:flex;
        flex-direction:column;
        gap:16px;
        margin-bottom:34px;
      }

      .feature{
        display:flex;
        align-items:flex-start;
        gap:12px;
        color:#d8e4d8;
        line-height:1.6;
      }

      .feature svg{
        color:#8bc34a;
        flex-shrink:0;
        margin-top:2px;
      }

      .bottom{
        margin-top:auto;
      }

      .best{
        color:#bcc8bd;
        margin-bottom:26px;
      }

      .best strong{
        color:#fff;
      }

      .btn{
        width:100%;
        text-decoration:none;
        padding:16px 22px;
        border-radius:18px;
        font-weight:800;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        transition:.3s;
      }

      .btn-solid{
        background:linear-gradient(135deg,#5d9c42,#8bc34a);
        color:#fff;
      }

      .btn-solid:hover{
        transform:translateY(-4px);
      }

      .btn-outline{
        border:1px solid rgba(255,255,255,.12);
        color:#fff;
        background:rgba(255,255,255,.04);
      }

      .btn-outline:hover{
        background:#fff;
        color:#111;
      }

      /* BESPOKE */

      .bespoke{
        margin-top:70px;
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:40px;
        padding:50px;
        text-align:center;
      }

      .bespoke-icon{
        width:90px;
        height:90px;
        margin:auto;
        margin-bottom:24px;
        border-radius:28px;
        background:linear-gradient(135deg,#5d9c42,#8bc34a);
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .bespoke-title{
        font-size:42px;
        font-weight:900;
        margin-bottom:18px;
      }

      .bespoke-text{
        max-width:760px;
        margin:auto;
        color:#bcc8bd;
        line-height:1.9;
        margin-bottom:34px;
      }

      .bespoke-actions{
        display:flex;
        justify-content:center;
        gap:18px;
        flex-wrap:wrap;
      }

      /* COMMERCIAL */

      .commercial{
        background:
        linear-gradient(135deg,#132219,#0b1510);
      }

      .commercial-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px;
      }

      .commercial-card{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:32px;
        padding:34px;
        backdrop-filter:blur(14px);
        transition:.4s;
      }

      .commercial-card:hover{
        transform:translateY(-8px);
      }

      .featured{
        border:2px solid #8bc34a;
        box-shadow:0 18px 45px rgba(139,195,74,.12);
      }

      .tags{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-bottom:26px;
      }

      .tag{
        padding:7px 14px;
        border-radius:999px;
        background:rgba(139,195,74,.12);
        color:#b8e986;
        font-size:12px;
        font-weight:700;
      }

      .commercial-title{
        font-size:32px;
        font-weight:900;
        margin-bottom:18px;
      }

      .commercial-price{
        font-size:52px;
        font-weight:900;
        margin-bottom:12px;
      }

      .commercial-period{
        color:#8bc34a;
        margin-bottom:30px;
        font-weight:700;
      }

      .note{
        text-align:center;
        margin-top:40px;
        color:#b8c4b9;
      }

      @media(max-width:1100px){

        .packages-grid,
        .commercial-grid{
          grid-template-columns:1fr;
        }

        .popular{
          transform:none;
        }

        .popular:hover{
          transform:translateY(-10px);
        }

      }

      @media(max-width:768px){

        .hero-title{
          font-size:48px;
        }

        .section-title{
          font-size:38px;
        }

        .package-card,
        .commercial-card,
        .bespoke{
          padding:26px;
        }

        .price{
          font-size:56px;
        }

        .bespoke-title{
          font-size:32px;
        }

        .bespoke-actions{
          flex-direction:column;
        }

      }

      `}</style>

      <div className="packages-page">

        {/* HERO */}

        <section className="hero">

          <div className="container-main">

            <div className="breadcrumb">
              Home
              <ArrowRight size={14} />
              Garden Packages
            </div>

            <h1 className="hero-title">
              Premium Garden
              <br />
              Care Packages
            </h1>

            <p className="hero-text">
              Professional landscaping and maintenance plans
              designed to keep your outdoor spaces immaculate all year round.
            </p>

            <a
              href="https://wa.me/447700900284"
              className="whatsapp-help"
            >
              <MessageCircle size={18} />
              Not sure which package suits you? WhatsApp us a photo.
            </a>

          </div>

        </section>

        {/* RESIDENTIAL */}

        <section className="section">

          <div className="container-main">

            <div className="section-center">

              <div className="section-kicker">
                RESIDENTIAL
              </div>

              <h2 className="section-title">
                Choose Your Package
              </h2>

              <p className="section-subtitle">
                Flexible monthly garden care plans with no hidden surprises.
              </p>

            </div>

            <div className="packages-grid">

              {residential.map((pkg, index) => (
                <div
                  key={index}
                  className={`package-card ${pkg.popular ? "popular" : ""}`}
                >

                  <div
                    className={`badge ${
                      pkg.popular
                        ? "gold"
                        : pkg.name === "Premium"
                        ? "dark"
                        : "green"
                    }`}
                  >
                    {pkg.badge}
                  </div>

                  <div className="price-wrap">

                    <div className="price-line">
                      <div className="price">
                        {pkg.price}
                      </div>

                      <div className="period">
                        {pkg.period}
                      </div>
                    </div>

                    <div className="visit">
                      {pkg.visits}
                    </div>

                  </div>

                  <div className="divider"></div>

                  <div className="feature-list">

                    {pkg.features.map((feature, i) => (
                      <div className="feature" key={i}>
                        <Check size={18} />
                        {feature}
                      </div>
                    ))}

                  </div>

                  <div className="bottom">

                    <div className="best">
                      <strong>Best for:</strong> {pkg.best}
                    </div>

                    <a
                      href="/contact"
                      className={`btn ${
                        pkg.btn === "solid"
                          ? "btn-solid"
                          : "btn-outline"
                      }`}
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </a>

                  </div>

                </div>
              ))}

            </div>

            {/* BESPOKE */}

            <div className="bespoke">

              <div className="bespoke-icon">
                <Crown size={38} />
              </div>

              <div className="bespoke-title">
                Bespoke Estate Packages
              </div>

              <div className="bespoke-text">
                For luxury estates, unusual gardens and specialist landscaping
                requirements, we create fully customised maintenance programmes
                tailored specifically to your property.
              </div>

              <div className="bespoke-actions">

                <a href="tel:01483726400" className="btn btn-solid">
                  <Phone size={18} />
                  Call To Discuss
                </a>

                <a
                  href="https://wa.me/447700900284"
                  className="btn btn-outline"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* COMMERCIAL */}

        <section className="section commercial">

          <div className="container-main">

            <div className="section-center">

              <div className="section-kicker">
                COMMERCIAL
              </div>

              <h2 className="section-title">
                Commercial Grounds Contracts
              </h2>

              <p className="section-subtitle">
                Reliable maintenance solutions for businesses,
                schools, estates and commercial properties.
              </p>

            </div>

            <div className="commercial-grid">

              {commercial.map((item, index) => (
                <div
                  key={index}
                  className={`commercial-card ${
                    item.featured ? "featured" : ""
                  }`}
                >

                  <div className="tags">

                    {item.tags.map((tag, i) => (
                      <div className="tag" key={i}>
                        {tag}
                      </div>
                    ))}

                  </div>

                  <div className="commercial-title">
                    {item.title}
                  </div>

                  <div className="commercial-price">
                    {item.price}
                  </div>

                  <div className="commercial-period">
                    {item.period}
                  </div>

                  <div className="feature-list">

                    {item.features.map((feature, i) => (
                      <div className="feature" key={i}>
                        <ShieldCheck size={18} />
                        {feature}
                      </div>
                    ))}

                  </div>

                  <a href="/contact" className="btn btn-solid">
                    <Building2 size={18} />
                    Request Quote
                  </a>

                </div>
              ))}

            </div>

            <div className="note">
              📋 All commercial contracts include SLA documentation,
              insurance certificates, reporting and compliance records.
            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Packages;