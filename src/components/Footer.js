import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
          Send Your Email And Subcribe Us.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">SEND</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Category</h2>
            <Link to="/profile">Brands</Link>
            <Link to="/travel">Gift Certificates</Link>
            <Link to="/blog">Affiliate</Link>
            <Link to="/events">Specials</Link>
            <Link to="/tips">Site Map</Link>
            <Link to="/contactus">Extras</Link>
          </div>
          <div class="footer-link-items">
            <h2>Informations</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div class="footer-link-items">
            <h2>My Account</h2>
            <Link to="/">My Account</Link>
            <Link to="/">Order History</Link>
            <Link to="/">Wishlist</Link>
            <Link to="/">Newsletter</Link>
            <Link to="/">Return</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <p>Kopo Bandung street no.10</p>
            <p>Bandung, West Java</p>
            <p>Indonesia, 40765</p>
            <p>Astore@astore.com</p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              {/* <img className="logo" src="./images/logo.png"></img> */}
              <h2>ASTORE</h2>
            </Link>
          </div>
          <small class="website-rights">Amanda Rahmat Hidayat © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
