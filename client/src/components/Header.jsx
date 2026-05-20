import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

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
          padding: 12px 20px;
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
          gap: 7px;
          text-decoration: none;
          min-width: 0;
          flex-shrink: 0;
        }

        .garden-logo {
          width: 82px;
          height: 70px;
          min-width: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
        }

        .garden-logo-img {
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
            drop-shadow(0 4px 8px rgba(31, 122, 63, 0.22));
          transition: 0.35s ease;
        }

        .garden-brand:hover .garden-logo-img {
          transform: scale(1.06);
        }

        .garden-brand-text {
          min-width: 0;
          margin-left: -3px;
        }

        .garden-title {
          font-size: 20px;
          font-weight: 900;
          color: #12351f;
          line-height: 1;
          letter-spacing: -0.4px;
          white-space: nowrap;
        }

        .garden-subtitle {
          margin-top: 4px;
          font-size: 13px;
          font-weight: 600;
          color: #8a6d1f;
          white-space: nowrap;
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
          -webkit-backdrop-filter: blur(14px);
        }

        .garden-nav a {
          text-decoration: none;
          color: #244c2d;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 15px;
          border-radius: 999px;
          transition: 0.3s ease;
          white-space: nowrap;
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
          flex-shrink: 0;
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
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          min-width: 46px;
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
          align-items: center;
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

        @media (max-width: 1200px) {
          .garden-nav {
            gap: 5px;
            padding: 7px;
          }

          .garden-nav a {
            font-size: 13px;
            padding: 9px 12px;
          }

          .garden-logo {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }

          .garden-title {
            font-size: 19px;
          }
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

        @media (max-width: 768px) {
          .garden-header {
            padding: 11px 16px;
          }

          .garden-brand {
            gap: 5px;
          }

          .garden-logo {
            width: 70px;
            height: 60px;
            min-width: 70px;
          }

          .garden-title {
            font-size: 18px;
          }

          .garden-subtitle {
            font-size: 12px;
          }
        }

        @media (max-width: 576px) {
          .garden-header {
            padding: 10px 14px;
          }

          .garden-inner {
            gap: 10px;
          }

          .garden-brand {
            max-width: calc(100% - 56px);
          }

          .garden-logo {
            width: 62px;
            height: 54px;
            min-width: 62px;
          }

          .garden-brand-text {
            margin-left: -2px;
            min-width: 0;
          }

          .garden-title {
            font-size: 17px;
            white-space: normal;
            line-height: 1.05;
          }

          .garden-subtitle {
            font-size: 11.5px;
          }

          .garden-toggle {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }
        }

        @media (max-width: 390px) {
          .garden-logo {
            width: 56px;
            height: 50px;
            min-width: 56px;
          }

          .garden-title {
            font-size: 15.5px;
          }

          .garden-subtitle {
            font-size: 10.5px;
          }
        }

        @media (max-width: 340px) {
          .garden-logo {
            width: 50px;
            height: 46px;
            min-width: 50px;
          }

          .garden-title {
            font-size: 14px;
          }

          .garden-subtitle {
            font-size: 10px;
          }
        }
      `}</style>

      <header className="garden-header">
        <div className="garden-container">
          <div className="garden-inner">
            <a className="garden-brand" href="/">
              <div className="garden-logo">
                <img
                  src="/Images/Logo.png"
                  alt="Eden Gardening & Landscaping Logo"
                  className="garden-logo-img"
                />
              </div>

              <div className="garden-brand-text">
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
              <a href="tel:07872697251" className="garden-phone">
                <Phone size={16} />
                <span>07872 697 251</span>
              </a>

              <a href="/contact" className="garden-quote">
                Get Quote
              </a>
            </div>

            <button
              className="garden-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              type="button"
            >
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