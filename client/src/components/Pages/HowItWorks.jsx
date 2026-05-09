import React from "react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Clock3,
  ClipboardList,
  Calendar,
  Sparkles,
  Star,
  Shield,
  Check,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Get In Touch",
      time: "2 Minutes",
      icon: <Phone size={24} />,
      desc: "Call us, WhatsApp us, or send a quick enquiry form. Tell us about your garden and what you'd like done.",
      points: [
        "Quick response",
        "WhatsApp available",
        "Free consultation",
      ],
    },
    {
      number: "02",
      title: "Garden Assessment",
      time: "30 Minutes",
      icon: <ClipboardList size={24} />,
      desc: "We visit your property, inspect the garden carefully, and discuss the best solutions for your outdoor space.",
      points: [
        "Free site visit",
        "Expert recommendations",
        "No pressure sales",
      ],
    },
    {
      number: "03",
      title: "Receive Your Quote",
      time: "Same Day",
      icon: <Calendar size={24} />,
      desc: "You'll receive a detailed written quotation with clear transparent pricing and no hidden extras.",
      points: [
        "Transparent pricing",
        "Written quotation",
        "Guaranteed price",
      ],
    },
    {
      number: "04",
      title: "Work Begins",
      time: "Your Schedule",
      icon: <Sparkles size={24} />,
      desc: "Our professional landscaping team arrives on time and completes the work neatly and efficiently.",
      points: [
        "Fully insured",
        "Professional uniformed team",
        "Site cleaned after work",
      ],
    },
    {
      number: "05",
      title: "After Care Support",
      time: "Ongoing",
      icon: <Star size={24} />,
      desc: "We provide ongoing maintenance plans and seasonal advice to keep your garden looking its best.",
      points: [
        "Maintenance plans",
        "Seasonal advice",
        "Long-term support",
      ],
    },
  ];

  const faqs = [
    {
      q: "How quickly can you start?",
      a: "Most one-off jobs can usually begin within 3–5 days depending on the season and workload.",
    },
    {
      q: "Do you offer regular maintenance?",
      a: "Yes. We provide weekly, fortnightly and monthly maintenance plans tailored to your garden.",
    },
    {
      q: "Are you fully insured?",
      a: "Absolutely. We carry £5M public liability insurance and work to professional safety standards.",
    },
    {
      q: "Do you handle one-off jobs?",
      a: "Yes. We handle both ongoing contracts and one-time garden clearances or landscaping projects.",
    },
    {
      q: "Which areas do you cover?",
      a: "We serve Guildford, Surrey and surrounding South West London areas.",
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
        background:#0d1710;
        font-family:Inter,sans-serif;
      }

      .how-page{
        color:#fff;
        overflow:hidden;
      }

      .container-main{
        width:100%;
        max-width:1280px;
        margin:auto;
        padding:0 20px;
      }

      /* HERO */

      .hero{
        padding:150px 0 100px;
        position:relative;
        overflow:hidden;
        background:
        radial-gradient(circle at top left,rgba(140,198,63,.15),transparent 35%),
        radial-gradient(circle at bottom right,rgba(221,179,74,.15),transparent 35%),
        linear-gradient(135deg,#0f1d14,#13261a,#0d1710);
      }

      .hero-center{
        text-align:center;
      }

      .breadcrumb{
        display:inline-flex;
        align-items:center;
        gap:10px;
        padding:10px 18px;
        border-radius:999px;
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.08);
        margin-bottom:28px;
        color:#b8c5ba;
        font-size:14px;
      }

      .hero-title{
        font-size:76px;
        line-height:1;
        font-weight:900;
        margin-bottom:24px;
        background:linear-gradient(to right,#ffffff,#b7d98c);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-text{
        max-width:760px;
        margin:auto;
        color:#b7c3b8;
        font-size:20px;
        line-height:1.9;
        margin-bottom:42px;
      }

      .hero-actions{
        display:flex;
        justify-content:center;
        gap:18px;
        flex-wrap:wrap;
      }

      .btn-main{
        text-decoration:none;
        padding:18px 34px;
        border-radius:18px;
        font-weight:800;
        background:linear-gradient(135deg,#5c9c42,#8bc34a);
        color:#fff;
        transition:.3s;
        box-shadow:0 18px 35px rgba(139,195,74,.22);
      }

      .btn-main:hover{
        transform:translateY(-4px);
      }

      .btn-outline{
        text-decoration:none;
        padding:18px 34px;
        border-radius:18px;
        font-weight:800;
        color:#fff;
        border:1px solid rgba(255,255,255,.14);
        background:rgba(255,255,255,.04);
        backdrop-filter:blur(10px);
        transition:.3s;
      }

      .btn-outline:hover{
        background:#fff;
        color:#111;
      }

      /* PROCESS */

      .process{
        padding:120px 0;
        position:relative;
      }

      .section-center{
        text-align:center;
        margin-bottom:80px;
      }

      .section-kicker{
        color:#8bc34a;
        letter-spacing:.18em;
        font-size:13px;
        font-weight:800;
        margin-bottom:18px;
      }

      .section-title{
        font-size:58px;
        font-weight:900;
        margin-bottom:20px;
      }

      .section-subtitle{
        color:#b7c3b8;
        font-size:18px;
      }

      .timeline{
        position:relative;
        max-width:1000px;
        margin:auto;
      }

      .timeline::before{
        content:"";
        position:absolute;
        top:0;
        left:40px;
        width:2px;
        height:100%;
        background:linear-gradient(to bottom,#8bc34a,transparent);
      }

      .step{
        position:relative;
        display:flex;
        gap:40px;
        margin-bottom:55px;
      }

      .step-left{
        position:relative;
        z-index:2;
      }

      .step-number{
        width:82px;
        height:82px;
        border-radius:50%;
        background:linear-gradient(135deg,#5c9c42,#8bc34a);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:26px;
        font-weight:900;
        box-shadow:0 15px 35px rgba(139,195,74,.22);
      }

      .step-card{
        flex:1;
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:32px;
        padding:36px;
        backdrop-filter:blur(14px);
        transition:.4s;
      }

      .step-card:hover{
        transform:translateY(-8px);
        border-color:rgba(139,195,74,.3);
      }

      .step-top{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:20px;
        margin-bottom:24px;
      }

      .step-icon{
        width:72px;
        height:72px;
        border-radius:24px;
        background:rgba(139,195,74,.14);
        color:#9dd85b;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .step-time{
        padding:10px 16px;
        border-radius:999px;
        background:rgba(255,255,255,.05);
        color:#c4d2c5;
        font-size:13px;
        font-weight:700;
      }

      .step-title{
        font-size:34px;
        font-weight:900;
        margin-bottom:14px;
      }

      .step-desc{
        color:#b9c4ba;
        line-height:1.9;
        margin-bottom:28px;
      }

      .points{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:16px;
      }

      .point{
        display:flex;
        align-items:center;
        gap:10px;
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.06);
        padding:14px 18px;
        border-radius:18px;
        font-weight:700;
        color:#d8e4d8;
      }

      .point svg{
        color:#8bc34a;
      }

      /* TRUST */

      .trust{
        padding:100px 0;
        background:
        linear-gradient(135deg,#132219,#0d1710);
      }

      .trust-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:24px;
      }

      .trust-card{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:28px;
        padding:38px;
        text-align:center;
      }

      .trust-icon{
        width:82px;
        height:82px;
        margin:auto;
        margin-bottom:22px;
        border-radius:24px;
        background:linear-gradient(135deg,#5c9c42,#8bc34a);
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .trust-title{
        font-size:22px;
        font-weight:800;
        margin-bottom:10px;
      }

      .trust-desc{
        color:#b8c4b9;
      }

      /* FAQ */

      .faq{
        padding:120px 0;
      }

      .faq-wrap{
        max-width:900px;
        margin:auto;
      }

      .faq-item{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:24px;
        margin-bottom:20px;
        overflow:hidden;
      }

      .faq-item summary{
        list-style:none;
        cursor:pointer;
        padding:28px;
        font-size:20px;
        font-weight:800;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .faq-item summary::-webkit-details-marker{
        display:none;
      }

      .faq-answer{
        padding:0 28px 28px;
        color:#b8c5ba;
        line-height:1.9;
      }

      /* CTA */

      .cta{
        padding:120px 0;
        text-align:center;
        background:
        linear-gradient(rgba(10,20,14,.92),rgba(10,20,14,.92)),
        url('/Images/h2.jpeg');
        background-size:cover;
        background-position:center;
      }

      .cta-title{
        font-size:64px;
        font-weight:900;
        margin-bottom:24px;
      }

      .cta-text{
        max-width:760px;
        margin:auto;
        color:#c1cdc2;
        line-height:1.9;
        font-size:19px;
        margin-bottom:42px;
      }

      .location{
        margin-top:28px;
        color:#aab7ac;
      }

      @media(max-width:1100px){

        .trust-grid{
          grid-template-columns:repeat(2,1fr);
        }

        .points{
          grid-template-columns:1fr;
        }

      }

      @media(max-width:768px){

        .hero-title{
          font-size:48px;
        }

        .section-title{
          font-size:38px;
        }

        .step{
          gap:20px;
        }

        .timeline::before{
          left:28px;
        }

        .step-number{
          width:58px;
          height:58px;
          font-size:20px;
        }

        .step-card{
          padding:24px;
        }

        .step-top{
          flex-direction:column;
          align-items:flex-start;
        }

        .step-title{
          font-size:26px;
        }

        .trust-grid{
          grid-template-columns:1fr;
        }

        .faq-item summary{
          font-size:17px;
          padding:22px;
        }

        .cta-title{
          font-size:42px;
        }

      }

      `}</style>

      <div className="how-page">

        {/* HERO */}

        <section className="hero">

          <div className="container-main">

            <div className="hero-center">

              <div className="breadcrumb">
                Home
                <ArrowRight size={14} />
                How It Works
              </div>

              <h1 className="hero-title">
                Simple Process.
                <br />
                Beautiful Results.
              </h1>

              <p className="hero-text">
                From your first enquiry to ongoing maintenance,
                we make professional garden care straightforward,
                transparent and stress-free.
              </p>

              <div className="hero-actions">

                <a href="/contact" className="btn-main">
                  Get Free Quote
                </a>

                <a href="tel:01483726400" className="btn-outline">
                  Call 01483 726 400
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="process">

          <div className="container-main">

            <div className="section-center">

              <div className="section-kicker">
                OUR PROCESS
              </div>

              <h2 className="section-title">
                How We Work
              </h2>

              <p className="section-subtitle">
                Five simple steps from enquiry to transformation.
              </p>

            </div>

            <div className="timeline">

              {steps.map((step, index) => (
                <div className="step" key={index}>

                  <div className="step-left">
                    <div className="step-number">
                      {step.number}
                    </div>
                  </div>

                  <div className="step-card">

                    <div className="step-top">

                      <div className="step-icon">
                        {step.icon}
                      </div>

                      <div className="step-time">
                        <Clock3 size={14} />
                        {step.time}
                      </div>

                    </div>

                    <div className="step-title">
                      {step.title}
                    </div>

                    <div className="step-desc">
                      {step.desc}
                    </div>

                    <div className="points">

                      {step.points.map((point, i) => (
                        <div className="point" key={i}>
                          <Check size={16} />
                          {point}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* TRUST */}

        <section className="trust">

          <div className="container-main">

            <div className="trust-grid">

              <div className="trust-card">

                <div className="trust-icon">
                  <Shield size={34} />
                </div>

                <div className="trust-title">
                  RHS Qualified
                </div>

                <div className="trust-desc">
                  Experienced horticultural specialists.
                </div>

              </div>

              <div className="trust-card">

                <div className="trust-icon">
                  <Shield size={34} />
                </div>

                <div className="trust-title">
                  £5M Insurance
                </div>

                <div className="trust-desc">
                  Fully insured for all projects.
                </div>

              </div>

              <div className="trust-card">

                <div className="trust-icon">
                  <Shield size={34} />
                </div>

                <div className="trust-title">
                  Since 2011
                </div>

                <div className="trust-desc">
                  Trusted across Surrey for over a decade.
                </div>

              </div>

              <div className="trust-card">

                <div className="trust-icon">
                  <Shield size={34} />
                </div>

                <div className="trust-title">
                  Satisfaction Guaranteed
                </div>

                <div className="trust-desc">
                  We stand behind every project we complete.
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="faq">

          <div className="container-main">

            <div className="faq-wrap">

              <div className="section-center">

                <div className="section-kicker">
                  FAQ
                </div>

                <h2 className="section-title">
                  Common Questions
                </h2>

              </div>

              {faqs.map((faq, index) => (
                <details className="faq-item" key={index}>

                  <summary>
                    {faq.q}
                    <ArrowRight size={18} />
                  </summary>

                  <div className="faq-answer">
                    {faq.a}
                  </div>

                </details>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <div className="container-main">

            <h2 className="cta-title">
              Ready To Transform
              <br />
              Your Garden?
            </h2>

            <p className="cta-text">
              Get a free no-obligation quote today and let our expert
              landscaping team create an outdoor space you’ll love.
            </p>

            <div className="hero-actions">

              <a href="/contact" className="btn-main">
                Get Free Quote
              </a>

              <a href="/packages" className="btn-outline">
                View Packages
              </a>

            </div>

            <div className="location">
              📍 Based in Guildford, Surrey — Serving Surrey & South West London
            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default HowItWorks;