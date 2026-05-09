import React from "react";
import { Leaf, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

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
          gap: 14px;
          margin-bottom: 24px;
        }

        .footer-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: linear-gradient(135deg, #5d9c42, #8bc34a);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 14px 30px rgba(139,195,74,.25);
        }

        .footer-title {
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
        }

        .footer-subtitle {
          display: block;
          margin-top: 5px;
          color: #b8e986;
          font-size: 14px;
          font-weight: 700;
        }

        .footer-quote {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 14px;
          color: #b8e986;
        }

        .footer-desc {
          color: #bdc9be;
          line-height: 1.8;
          max-width: 420px;
          margin-bottom: 22px;
        }

        .footer-badge {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(139,195,74,.12);
          border: 1px solid rgba(139,195,74,.25);
          color: #b8e986;
          font-weight: 800;
          font-size: 14px;
        }

        .footer-heading {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 24px;
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
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: #8bc34a;
          transform: translateX(5px);
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

        .footer-policy {
          display: flex;
          gap: 18px;
        }

        .footer-policy a {
          color: #99a798;
          text-decoration: none;
        }

        .footer-policy a:hover {
          color: #8bc34a;
        }

        @media(max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <div className="footer-icon">
                  <Leaf size={28} />
                </div>
                <div>
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
                <a href="tel:07900799126">
                  <Phone size={17} /> 07872 697 251
                </a>

                <a href="https://wa.me/07872697251">
                  <MessageCircle size={17} /> WhatsApp Us
                </a>

                <a href="mailto:hello@allen.co.uk">
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