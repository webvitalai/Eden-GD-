import React, { useState } from "react";
import { Leaf, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Packages", path: "/packages" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .garden-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          padding: 14px 20px;
          background: linear-gradient(135deg, #f4fff6 0%, #e7f7df 45%, #fff8e7 100%);
          border-bottom: 1px solid rgba(37, 95, 56, 0.15);
          box-shadow: 0 12px 35px rgba(32, 71, 44, 0.12);
        }

        .garden-container {
          max-width: 1320px;
          margin: auto;
        }

        .garden-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .garden-brand {
          display: flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
        }

        .garden-logo {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(135deg, #1f7a3f, #9bc53d);
          box-shadow: 0 10px 25px rgba(31, 122, 63, 0.35);
        }

        .garden-title {
          font-size: 20px;
          font-weight: 900;
          color: #12351f;
          line-height: 1;
          letter-spacing: -0.4px;
        }

        .garden-subtitle {
          margin-top: 4px;
          font-size: 13px;
          font-weight: 600;
          color: #8a6d1f;
        }

        .garden-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(31, 122, 63, 0.12);
          backdrop-filter: blur(14px);
        }

        .garden-nav a {
          text-decoration: none;
          color: #244c2d;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 15px;
          border-radius: 999px;
          transition: 0.3s ease;
        }

        .garden-nav a:hover,
        .garden-nav a.active {
          color: #fff;
          background: linear-gradient(135deg, #2f8f46, #7faf2f);
          box-shadow: 0 8px 18px rgba(47, 143, 70, 0.28);
        }

        .garden-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .garden-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #12351f;
          font-weight: 800;
          font-size: 14px;
          white-space: nowrap;
        }

        .garden-quote {
          text-decoration: none;
          padding: 13px 20px;
          border-radius: 14px;
          color: #fff;
          font-weight: 900;
          background: linear-gradient(135deg, #173b22, #2f8f46);
          box-shadow: 0 12px 24px rgba(23, 59, 34, 0.28);
          transition: 0.3s ease;
        }

        .garden-quote:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(23, 59, 34, 0.36);
        }

        .garden-toggle {
          display: none;
          border: none;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          color: #fff;
          background: #173b22;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .garden-mobile {
          display: none;
          margin-top: 14px;
          padding: 16px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(31, 122, 63, 0.14);
          box-shadow: 0 16px 35px rgba(32, 71, 44, 0.14);
        }

        .garden-mobile a {
          display: block;
          text-decoration: none;
          color: #244c2d;
          font-weight: 800;
          padding: 13px 14px;
          border-radius: 14px;
        }

        .garden-mobile a:hover,
        .garden-mobile a.active {
          background: #edf8e8;
          color: #1f7a3f;
        }

        .garden-mobile .garden-phone {
          display: flex;
          margin-top: 8px;
          background: #fff8e7;
          color: #173b22;
        }

        .garden-mobile .garden-quote {
          text-align: center;
          margin-top: 12px;
          color: #fff;
          background: linear-gradient(135deg, #173b22, #2f8f46);
        }

        @media (max-width: 1100px) {
          .garden-nav,
          .garden-actions {
            display: none;
          }

          .garden-toggle {
            display: flex;
          }

          .garden-mobile.show {
            display: block;
          }
        }

        @media (max-width: 576px) {
          .garden-header {
            padding: 12px 14px;
          }

          .garden-logo {
            width: 43px;
            height: 43px;
            border-radius: 14px;
          }

          .garden-title {
            font-size: 17px;
          }

          .garden-subtitle {
            font-size: 12px;
          }
        }
      `}</style>

      <header className="garden-header">
        <div className="garden-container">
          <div className="garden-inner">
            <a className="garden-brand" href="/">
              <div className="garden-logo">
                <Leaf size={24} />
              </div>
              <div>
                <div className="garden-title">Eden Gardening</div>
                <div className="garden-subtitle">& Landscaping</div>
              </div>
            </a>

            <nav className="garden-nav">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className={link.name === "Home" ? "active" : ""}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="garden-actions">
              <a href="tel:07900799126" className="garden-phone">
                <Phone size={16} />
                <span>07872 697 251</span>
              </a>
              <a href="/contact" className="garden-quote">
                Get Quote
              </a>
            </div>

            <button className="garden-toggle" onClick={() => setOpen(!open)}>
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          <div className={`garden-mobile ${open ? "show" : ""}`}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={link.name === "Home" ? "active" : ""}
              >
                {link.name}
              </a>
            ))}

            <a href="tel:07872697251" className="garden-phone">
              <Phone size={16} />
              07872 697 251
            </a>

            <a href="/contact" className="garden-quote">
              Get Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;