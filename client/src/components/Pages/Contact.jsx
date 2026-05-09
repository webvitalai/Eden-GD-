import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Shield,
  Clock3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [service, setService] = useState("");

  const services = [
    "Garden Maintenance",
    "Garden Clearance",
    "Lawn Care",
    "Landscaping",
    "Tree & Hedge Work",
    "Commercial Grounds",
    "Not Sure Yet",
  ];

  const faqs = [
    {
      q: "How quickly can you start?",
      a: "Most one-off work can begin within 3–5 days depending on workload and season.",
    },
    {
      q: "Do you offer regular maintenance?",
      a: "Yes. Weekly, fortnightly and monthly maintenance plans are available.",
    },
    {
      q: "Are you insured?",
      a: "Absolutely. We carry full public liability insurance for residential and commercial projects.",
    },
    {
      q: "Can I send photos?",
      a: "Yes. WhatsApp photos help us provide faster and more accurate quotations.",
    },
    {
      q: "Which areas do you cover?",
      a: "We cover Guildford, Surrey and surrounding South West London areas.",
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

      .contact-page{
        color:#fff;
        overflow:hidden;
      }

      .container-main{
        max-width:1280px;
        margin:auto;
        padding:0 20px;
      }

      /* HERO */

      .contact-hero{
        padding:150px 0 95px;
        text-align:center;
        background:
        radial-gradient(circle at top left,rgba(139,195,74,.16),transparent 35%),
        radial-gradient(circle at bottom right,rgba(212,170,70,.14),transparent 35%),
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
        font-size:74px;
        line-height:1;
        font-weight:900;
        margin-bottom:22px;
        background:linear-gradient(to right,#fff,#b7d98c);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-subtitle{
        max-width:760px;
        margin:auto;
        color:#bcc8bd;
        font-size:20px;
        line-height:1.9;
        margin-bottom:28px;
      }

      .hero-badge{
        display:inline-flex;
        align-items:center;
        gap:10px;
        background:rgba(139,195,74,.12);
        border:1px solid rgba(139,195,74,.2);
        padding:12px 20px;
        border-radius:999px;
        color:#b8e986;
        font-weight:700;
      }

      /* CONTACT CARDS */

      .contact-section{
        padding:110px 0;
      }

      .contact-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px;
        margin-bottom:80px;
      }

      .contact-card{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:32px;
        padding:38px;
        backdrop-filter:blur(14px);
        text-align:center;
        transition:.4s;
      }

      .contact-card:hover{
        transform:translateY(-10px);
        border-color:rgba(139,195,74,.3);
      }

      .icon-wrap{
        width:82px;
        height:82px;
        margin:auto;
        margin-bottom:24px;
        border-radius:24px;
        background:linear-gradient(135deg,#5d9c42,#8bc34a);
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .icon-wrap.whatsapp{
        background:linear-gradient(135deg,#1fb65c,#25D366);
      }

      .card-title{
        font-size:28px;
        font-weight:900;
        margin-bottom:14px;
      }

      .card-text{
        color:#bcc8bd;
        line-height:1.8;
        margin-bottom:26px;
      }

      .contact-btn{
        width:100%;
        height:56px;
        border-radius:18px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        text-decoration:none;
        font-weight:800;
        transition:.3s;
      }

      .green-btn{
        background:linear-gradient(135deg,#5d9c42,#8bc34a);
        color:#fff;
      }

      .green-btn:hover{
        transform:translateY(-3px);
      }

      .whatsapp-btn{
        background:#25D366;
        color:#fff;
      }

      .outline-btn{
        border:1px solid rgba(255,255,255,.12);
        background:rgba(255,255,255,.04);
        color:#fff;
      }

      .outline-btn:hover{
        background:#fff;
        color:#111;
      }

      .small-note{
        margin-top:18px;
        color:#8bc34a;
        font-size:14px;
      }

      /* MAIN */

      .main-grid{
        display:grid;
        grid-template-columns:420px 1fr;
        gap:34px;
      }

      /* FAQ */

      .faq-card,
      .form-card{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:36px;
        padding:36px;
        backdrop-filter:blur(16px);
      }

      .section-title{
        font-size:38px;
        font-weight:900;
        margin-bottom:12px;
      }

      .section-text{
        color:#bcc8bd;
        line-height:1.8;
        margin-bottom:34px;
      }

      .faq-item{
        background:rgba(255,255,255,.03);
        border:1px solid rgba(255,255,255,.06);
        border-radius:18px;
        overflow:hidden;
        margin-bottom:14px;
      }

      .faq-item summary{
        list-style:none;
        cursor:pointer;
        padding:20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:15px;
        font-weight:800;
      }

      .faq-item summary::-webkit-details-marker{
        display:none;
      }

      .faq-answer{
        padding:0 20px 20px;
        color:#bcc8bd;
        line-height:1.8;
      }

      /* FORM */

      .service-grid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:14px;
        margin-bottom:34px;
      }

      .service-option{
        border:1px solid rgba(255,255,255,.08);
        background:rgba(255,255,255,.03);
        border-radius:18px;
        padding:16px;
        text-align:center;
        cursor:pointer;
        transition:.3s;
        font-weight:700;
      }

      .service-option.active,
      .service-option:hover{
        background:rgba(139,195,74,.12);
        border-color:rgba(139,195,74,.3);
        color:#b8e986;
      }

      .form-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
      }

      .form-group{
        margin-bottom:22px;
      }

      .form-group label{
        display:block;
        margin-bottom:10px;
        font-size:14px;
        font-weight:800;
      }

      .input,
      .textarea{
        width:100%;
        border:none;
        outline:none;
        border-radius:18px;
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.08);
        color:#fff;
        padding:0 18px;
        font-size:15px;
        transition:.3s;
      }

      .input{
        height:56px;
      }

      .textarea{
        min-height:140px;
        padding-top:18px;
        resize:none;
      }

      .input:focus,
      .textarea:focus{
        border-color:rgba(139,195,74,.4);
      }

      .input::placeholder,
      .textarea::placeholder{
        color:#97a397;
      }

      .whatsapp-note{
        margin-top:12px;
        display:inline-flex;
        align-items:center;
        gap:10px;
        color:#8bc34a;
        text-decoration:none;
        font-size:14px;
        font-weight:700;
      }

      .consent{
        display:flex;
        gap:12px;
        align-items:flex-start;
        margin:28px 0;
      }

      .consent input{
        margin-top:4px;
        accent-color:#8bc34a;
      }

      .consent span{
        color:#bcc8bd;
        line-height:1.7;
        font-size:14px;
      }

      .submit-btn{
        width:100%;
        height:60px;
        border:none;
        border-radius:20px;
        background:linear-gradient(135deg,#5d9c42,#8bc34a);
        color:#fff;
        font-size:16px;
        font-weight:900;
        cursor:pointer;
        transition:.3s;
      }

      .submit-btn:hover{
        transform:translateY(-3px);
      }

      .location{
        margin-top:28px;
        text-align:center;
        color:#bcc8bd;
      }

      @media(max-width:1100px){

        .contact-grid{
          grid-template-columns:1fr;
        }

        .main-grid{
          grid-template-columns:1fr;
        }

      }

      @media(max-width:768px){

        .hero-title{
          font-size:46px;
        }

        .hero-subtitle{
          font-size:16px;
        }

        .form-grid,
        .service-grid{
          grid-template-columns:1fr;
        }

        .contact-card,
        .faq-card,
        .form-card{
          padding:26px;
        }

        .section-title{
          font-size:30px;
        }

      }

      `}</style>

      <main className="contact-page">

        {/* HERO */}

        <section className="contact-hero">

          <div className="container-main">

            <div className="breadcrumb">
              Home
              <ChevronRight size={14} />
              Contact
            </div>

            <h1 className="hero-title">
              Let’s Talk About
              <br />
              Your Garden
            </h1>

            <p className="hero-subtitle">
              Free quotes, fast responses and professional landscaping
              advice from experienced garden specialists.
            </p>

            <div className="hero-badge">
              🌿 Currently booking spring & summer projects
            </div>

          </div>

        </section>

        {/* CONTACT CARDS */}

        <section className="contact-section">

          <div className="container-main">

            <div className="contact-grid">

              <div className="contact-card">

                <div className="icon-wrap">
                  <Phone size={34} />
                </div>

                <div className="card-title">
                  Call Us
                </div>

                <div className="card-text">
                  Speak directly with our landscaping team
                  for advice and fast quotations.
                </div>

                <a
                  href="tel:07872697251"
                  className="contact-btn green-btn"
                >
                  📞 07872697251
                </a>

                <div className="small-note">
                  Mon–Sat • 7:30am – 5:30pm
                </div>

              </div>

              <div className="contact-card">

                <div className="icon-wrap whatsapp">
                  <MessageCircle size={34} />
                </div>

                <div className="card-title">
                  WhatsApp
                </div>

                <div className="card-text">
                  Send garden photos for a faster
                  and more accurate quotation.
                </div>

                <a
                  href="https://wa.me/07872697251"
                  className="contact-btn whatsapp-btn"
                >
                  💬 WhatsApp Us
                </a>

                <div className="small-note">
                  Usually replies within a few hours
                </div>

              </div>

              <div className="contact-card">

                <div className="icon-wrap">
                  <Mail size={34} />
                </div>

                <div className="card-title">
                  Email
                </div>

                <div className="card-text">
                  Ideal for detailed enquiries
                  and commercial landscaping projects.
                </div>

                <a
                  href="mailto:hello@allen.co.uk"
                  className="contact-btn outline-btn"
                >
                  ✉️ hello@eden.co.uk
                </a>

                <div className="small-note">
                  Response within 4 working hours
                </div>

              </div>

            </div>

            {/* MAIN */}

            <div className="main-grid">

              {/* FAQ */}

              <div className="faq-card">

                <div className="section-title">
                  Frequently Asked Questions
                </div>

                <div className="section-text">
                  Quick answers to common questions.
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

              {/* FORM */}

              <div className="form-card">

                <div className="section-title">
                  Request Free Quote
                </div>

                <div className="section-text">
                  No obligation quotation. We usually respond within a few hours.
                </div>

                <div className="service-grid">

                  {services.map((item) => (
                    <div
                      key={item}
                      className={`service-option ${
                        service === item ? "active" : ""
                      }`}
                      onClick={() => setService(item)}
                    >
                      {item}
                    </div>
                  ))}

                </div>

                <form>

                  <div className="form-grid">

                    <div className="form-group">
                      <label>Your Name</label>

                      <input
                        type="text"
                        className="input"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        className="input"
                        placeholder="07872697251"
                      />
                    </div>

                  </div>

                  <div className="form-grid">

                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        className="input"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label>Postcode</label>

                      <input
                        type="text"
                        className="input"
                        placeholder="GU1 4SZ"
                      />
                    </div>

                  </div>

                  <div className="form-group">

                    <label>Tell us about your garden</label>

                    <textarea
                      className="textarea"
                      placeholder="Describe the work you'd like completed..."
                    ></textarea>

                    <a
                      href="https://wa.me/07872697251"
                      className="whatsapp-note"
                    >
                      <MessageCircle size={16} />
                      Got photos? Send them on WhatsApp →
                    </a>

                  </div>

                  <label className="consent">

                    <input type="checkbox" />

                    <span>
                      I’m happy to be contacted regarding my enquiry.
                    </span>

                  </label>

                  <button className="submit-btn">
                    Request Free Quote →
                  </button>

                </form>

                <div className="location">
                  <MapPin size={16} style={{display:"inline"}} />
                  {" "}
                  Guildford, Surrey — Serving Surrey & South West London
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Contact;