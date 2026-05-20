import React from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background:
            radial-gradient(circle at top left, rgba(139,195,74,.16), transparent 35%),
            linear-gradient(135deg, #0b1510, #13251a, #0c1610);
          color: #fff;
          padding: 80px 20px 0;
          font-family: Inter, sans-serif;
          overflow: hidden;
        }

        .footer * {
          box-sizing: border-box;
        }

        .footer-container {
          max-width: 1320px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 50px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 24px;
          max-width: 100%;
        }

        .footer-logo-box {
          width: 86px;
          height: 74px;
          min-width: 86px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
          flex-shrink: 0;
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          filter:
            brightness(1.08)
            contrast(1.16)
            saturate(1.12)
            drop-shadow(0 5px 10px rgba(0,0,0,.35));
          transition: .35s ease;
        }

        .footer-logo:hover .footer-logo-img {
          transform: scale(1.06);
        }

        .footer-brand-text {
          min-width: 0;
          margin-left: -3px;
        }

        .footer-title {
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          white-space: nowrap;
        }

        .footer-subtitle {
          display: block;
          margin-top: 5px;
          color: #b8e986;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .footer-quote {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 14px;
          color: #b8e986;
          line-height: 1.25;
        }

        .footer-desc {
          color: #bdc9be;
          line-height: 1.8;
          max-width: 420px;
          margin-bottom: 22px;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(139,195,74,.12);
          border: 1px solid rgba(139,195,74,.25);
          color: #b8e986;
          font-weight: 800;
          font-size: 14px;
          line-height: 1.3;
        }

        .footer-heading {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .footer-links,
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links a,
        .footer-contact a,
        .footer-contact p {
          color: #bdc9be;
          text-decoration: none;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: .3s;
          line-height: 1.5;
        }

        .footer-contact p {
          align-items: flex-start;
        }

        .footer-contact a:hover,
        .footer-links a:hover {
          color: #8bc34a;
          transform: translateX(5px);
        }

        .footer-contact svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-hours {
          margin-top: 18px;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
        }

        .footer-hours p {
          font-size: 14px;
          margin-bottom: 8px;
          display: block;
        }

        .footer-hours p:last-child {
          margin-bottom: 0;
        }

        .footer-bottom {
          margin-top: 65px;
          border-top: 1px solid rgba(255,255,255,.08);
          padding: 26px 0;
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          color: #99a798;
          font-size: 14px;
        }

        .footer-bottom-inner p {
          margin: 0;
        }

        .footer-policy {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-policy a {
          color: #99a798;
          text-decoration: none;
        }

        .footer-policy a:hover {
          color: #8bc34a;
        }

        @media(max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 42px;
          }

          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }

          .footer-desc {
            max-width: 620px;
          }
        }

        @media(max-width: 900px) {
          .footer {
            padding: 70px 20px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }

          .footer-policy {
            justify-content: center;
          }

          .footer-logo-box {
            width: 78px;
            height: 68px;
            min-width: 78px;
          }

          .footer-title {
            font-size: 23px;
          }
        }

        @media(max-width: 576px) {
          .footer {
            padding: 60px 16px 0;
          }

          .footer-logo {
            gap: 5px;
            align-items: center;
          }

          .footer-logo-box {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .footer-brand-text {
            margin-left: -2px;
            min-width: 0;
          }

          .footer-title {
            font-size: 20px;
            white-space: normal;
            line-height: 1.08;
          }

          .footer-subtitle {
            font-size: 12px;
          }

          .footer-quote {
            font-size: 21px;
          }

          .footer-desc {
            font-size: 14px;
          }

          .footer-heading {
            font-size: 20px;
          }

          .footer-badge {
            font-size: 13px;
            padding: 11px 15px;
          }

          .footer-contact a,
          .footer-contact p,
          .footer-links a {
            font-size: 14px;
          }

          .footer-bottom {
            margin-top: 50px;
          }
        }

        @media(max-width: 390px) {
          .footer-logo-box {
            width: 58px;
            height: 52px;
            min-width: 58px;
          }

          .footer-title {
            font-size: 18px;
          }

          .footer-subtitle {
            font-size: 11px;
          }

          .footer-quote {
            font-size: 19px;
          }

          .footer-bottom-inner {
            font-size: 13px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <div className="footer-logo-box">
                  <img
                    src="/Images/Logo.png"
                    alt="Eden Gardening & Landscaping Logo"
                    className="footer-logo-img"
                  />
                </div>

                <div className="footer-brand-text">
                  <div className="footer-title">Eden Gardening</div>
                  <span className="footer-subtitle">& Landscaping</span>
                </div>
              </div>

              <div className="footer-quote">Gardens That Grow With You</div>

              <p className="footer-desc">
                Professional gardening and landscaping services across Surrey,
                South West London and surrounding areas.
              </p>

              <div className="footer-badge">
                🌿 RHS Qualified Horticulturists
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Quick Links</h4>

              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/how-it-works">How It Works</a>
                <a href="/packages">Garden Packages</a>
                <a href="/our-work">Our Work</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Get In Touch</h4>

              <div className="footer-contact">
                <a href="tel:07872697251">
                  <Phone size={17} /> 07872 697 251
                </a>

                <a href="https://wa.me/447872697251">
                  <MessageCircle size={17} /> WhatsApp Us
                </a>

                <a href="mailto:hello@eden.co.uk">
                  <Mail size={17} /> hello@eden.co.uk
                </a>

                <p>
                  <MapPin size={17} /> Bramhall, Manchester, United Kingdom
                </p>

                <div className="footer-hours">
                  <p>Mon–Fri: 7:30am – 5:30pm</p>
                  <p>Sat: 8:00am – 3:00pm</p>
                  <p>Sun: WhatsApp enquiries answered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p>© 2025 Eden Gardening & Landscaping Services.</p>

              <div className="footer-policy">
                <a href="/contact">Privacy Policy</a>
                <a href="/contact">Terms</a>
              </div>

              <p>£5M Public Liability Insured</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;