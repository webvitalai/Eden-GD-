import React from "react";
import {
  Phone,
  Shield,
  Award,
  Clock3,
  CircleCheck,
  ArrowRight,
  MapPin,
  Leaf,
} from "lucide-react";

const Home = () => {
  return (
    <>
      <style>{`
      
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        background:#f6f8f3;
        font-family:Inter,sans-serif;
        color:#1d2b1f;
      }

      .main-wrapper{
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
        padding:140px 0 110px;
        background:
        radial-gradient(circle at top left,#d8f1d5 0%,transparent 35%),
        radial-gradient(circle at bottom right,#f4e7c5 0%,transparent 35%),
        linear-gradient(135deg,#f7fff5,#edf7e8);
      }

      .hero-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
        align-items:center;
      }

      .hero-badge{
        display:inline-flex;
        align-items:center;
        gap:10px;
        background:#ffffff;
        padding:12px 20px;
        border-radius:999px;
        font-weight:700;
        margin-bottom:25px;
        color:#497a52;
        box-shadow:0 10px 30px rgba(0,0,0,0.05);
      }

      .hero-title{
        font-size:68px;
        line-height:1.05;
        font-weight:900;
        margin-bottom:25px;
        color:#17361d;
        letter-spacing:-2px;
      }

      .hero-text{
        font-size:19px;
        line-height:1.8;
        color:#5c6d5f;
        margin-bottom:35px;
        max-width:620px;
      }

      .pill-wrap{
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-bottom:40px;
      }

      .pill{
        padding:12px 18px;
        border-radius:999px;
        background:#ffffff;
        color:#325238;
        font-weight:700;
        box-shadow:0 6px 18px rgba(0,0,0,0.05);
      }

      .btns{
        display:flex;
        gap:18px;
        flex-wrap:wrap;
        margin-bottom:30px;
      }

      .btn-main{
        padding:16px 30px;
        border-radius:16px;
        text-decoration:none;
        font-weight:800;
        color:#fff;
        background:linear-gradient(135deg,#2f6d3f,#87b948);
        box-shadow:0 15px 35px rgba(47,109,63,0.3);
        transition:0.3s;
      }

      .btn-main:hover{
        transform:translateY(-3px);
      }

      .btn-outline{
        padding:16px 30px;
        border-radius:16px;
        text-decoration:none;
        font-weight:800;
        color:#2f6d3f;
        border:2px solid #2f6d3f;
        transition:0.3s;
      }

      .btn-outline:hover{
        background:#2f6d3f;
        color:#fff;
      }

      .phone{
        display:flex;
        align-items:center;
        gap:10px;
        font-weight:800;
        color:#23422a;
        text-decoration:none;
      }

      .hero-image{
        position:relative;
      }

      .hero-image img{
        width:100%;
        height:620px;
        object-fit:cover;
        border-radius:36px;
        box-shadow:0 25px 60px rgba(0,0,0,0.15);
      }

      .review-box{
        position:absolute;
        bottom:30px;
        left:-30px;
        background:rgba(255,255,255,0.92);
        backdrop-filter:blur(12px);
        padding:22px;
        border-radius:24px;
        box-shadow:0 20px 40px rgba(0,0,0,0.12);
      }

      .review-stars{
        color:#d9a400;
        font-size:20px;
        margin-bottom:8px;
      }

      /* TRUST */

      .trust-section{
        padding:90px 0;
      }

      .trust-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:25px;
      }

      .trust-card{
        background:#fff;
        padding:30px;
        border-radius:28px;
        box-shadow:0 12px 35px rgba(0,0,0,0.05);
        transition:0.3s;
      }

      .trust-card:hover{
        transform:translateY(-6px);
      }

      .trust-icon{
        width:65px;
        height:65px;
        border-radius:20px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:linear-gradient(135deg,#2f6d3f,#87b948);
        color:#fff;
        margin-bottom:20px;
      }

      .trust-title{
        font-size:20px;
        font-weight:800;
        margin-bottom:8px;
      }

      .trust-desc{
        color:#68776b;
      }

      /* WORK */

      .work-section{
        padding:110px 0;
        background:#ffffff;
      }

      .section-center{
        text-align:center;
        margin-bottom:60px;
      }

      .section-kicker{
        color:#7da44e;
        font-weight:800;
        margin-bottom:15px;
      }

      .section-title{
        font-size:52px;
        font-weight:900;
        margin-bottom:18px;
        color:#1b311f;
      }

      .section-text{
        color:#6d7a70;
        font-size:18px;
      }

      .work-grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:30px;
      }

      .work-card{
        background:#fff;
        border-radius:28px;
        overflow:hidden;
        box-shadow:0 18px 40px rgba(0,0,0,0.07);
        transition:0.4s;
      }

      .work-card:hover{
        transform:translateY(-8px);
      }

      .work-card img{
        width:100%;
        height:300px;
        object-fit:cover;
      }

      .work-content{
        padding:28px;
      }

      .work-title{
        font-size:24px;
        font-weight:800;
        margin-bottom:12px;
      }

      .location{
        display:flex;
        align-items:center;
        gap:8px;
        color:#607063;
        font-weight:600;
      }

      /* CTA */

      .cta{
        padding:110px 0;
        background:
        linear-gradient(rgba(22,44,28,0.88),rgba(22,44,28,0.88)),
        url('/Images/h2.jpeg');
        background-size:cover;
        background-position:center;
        color:#fff;
        text-align:center;
      }

      .cta h2{
        font-size:58px;
        margin-bottom:25px;
        font-weight:900;
      }

      .cta p{
        max-width:700px;
        margin:auto;
        line-height:1.8;
        color:#d8e2d8;
        margin-bottom:40px;
      }

      .stats{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:25px;
        margin-top:70px;
      }

      .stat-card{
        background:rgba(255,255,255,0.08);
        border:1px solid rgba(255,255,255,0.12);
        backdrop-filter:blur(10px);
        padding:35px;
        border-radius:24px;
      }

      .stat-number{
        font-size:42px;
        font-weight:900;
        margin-bottom:8px;
      }

      .stat-label{
        color:#d4ddd5;
      }

      @media(max-width:992px){

        .hero-grid,
        .trust-grid,
        .work-grid,
        .stats{
          grid-template-columns:1fr;
        }

        .hero-title{
          font-size:48px;
        }

        .section-title{
          font-size:40px;
        }

        .cta h2{
          font-size:42px;
        }

        .hero-image img{
          height:500px;
        }

      }

      `}</style>

      <div className="main-wrapper">

        {/* HERO */}

        <section className="hero">
          <div className="container-main">
            <div className="hero-grid">

              <div>

                <div className="hero-badge">
                  <Leaf size={18} />
                  Serving Surrey Since 2011
                </div>

                <h1 className="hero-title">
                  Beautiful Gardens.
                  <br />
                  Professionally Maintained.
                </h1>

                <p className="hero-text">
                  From luxury landscaping to regular garden maintenance,
                  we create outdoor spaces that stay healthy, clean,
                  and visually stunning all year round.
                </p>

                <div className="pill-wrap">
                  <div className="pill">✓ RHS Qualified</div>
                  <div className="pill">✓ Fully Insured</div>
                  <div className="pill">✓ Free Quotes</div>
                </div>

                <div className="btns">
                  <a href="/contact" className="btn-main">
                    Get Free Quote
                  </a>

                  <a href="/our-work" className="btn-outline">
                    View Portfolio
                  </a>
                </div>

                <a href="tel:01483726400" className="phone">
                  <Phone size={18} />
                  01483 726 400
                </a>

              </div>

              <div className="hero-image">

                <img src="/Images/h3.jpeg" alt="" />

                <div className="review-box">
                  <div className="review-stars">★★★★★</div>
                  <strong>4.9/5 · 180+ Reviews</strong>
                  <div>Guildford & Surrey</div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* TRUST */}

        <section className="trust-section">
          <div className="container-main">

            <div className="trust-grid">

              <div className="trust-card">
                <div className="trust-icon">
                  <Shield />
                </div>

                <div className="trust-title">RHS Qualified</div>
                <div className="trust-desc">
                  Professional horticulturists with years of expertise.
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon">
                  <Award />
                </div>

                <div className="trust-title">£5M Insurance</div>
                <div className="trust-desc">
                  Fully insured for residential & commercial projects.
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon">
                  <Clock3 />
                </div>

                <div className="trust-title">13+ Years</div>
                <div className="trust-desc">
                  Trusted landscaping experts across Surrey.
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon">
                  <CircleCheck />
                </div>

                <div className="trust-title">Guaranteed</div>
                <div className="trust-desc">
                  Customer satisfaction backed by quality workmanship.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* WORK */}

        <section className="work-section">

          <div className="container-main">

            <div className="section-center">
              <div className="section-kicker">
                OUR RECENT PROJECTS
              </div>

              <h2 className="section-title">
                Gardens We’ve Transformed
              </h2>

              <p className="section-text">
                Premium landscaping and garden restoration projects across Surrey.
              </p>
            </div>

            <div className="work-grid">

              <div className="work-card">

                <img src="/Images/ho2.png" alt="" />

                <div className="work-content">

                  <div className="work-title">
                    Garden Clearance
                  </div>

                  <div className="location">
                    <MapPin size={15} />
                    Guildford, Surrey
                  </div>

                </div>

              </div>

              <div className="work-card">

                <img src="/Images/ho4.png" alt="" />

                <div className="work-content">

                  <div className="work-title">
                    Lawn Restoration
                  </div>

                  <div className="location">
                    <MapPin size={15} />
                    Godalming, Surrey
                  </div>

                </div>

              </div>

              <div className="work-card">

                <img src="/Images/ho6.png" alt="" />

                <div className="work-content">

                  <div className="work-title">
                    Modern Landscaping
                  </div>

                  <div className="location">
                    <MapPin size={15} />
                    Woking, Surrey
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <div className="container-main">

            <h2>
              Ready To Transform
              <br />
              Your Garden?
            </h2>

            <p>
              Whether you need regular maintenance,
              a complete garden makeover,
              or seasonal landscaping services —
              our expert team is ready to help.
            </p>

            <div className="btns" style={{justifyContent:"center"}}>

              <a href="/contact" className="btn-main">
                Get Free Quote
              </a>

              <a href="/packages" className="btn-outline">
                View Packages
              </a>

            </div>

            <div className="stats">

              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Gardens Completed</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">13+</div>
                <div className="stat-label">Years Experience</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">180+</div>
                <div className="stat-label">5-Star Reviews</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Average Rating</div>
              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Home;