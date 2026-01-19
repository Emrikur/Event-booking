import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import "../styles/Footer.css";

function Footer() {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  const translation = translations[language].footer;

  return (
    <footer className="footer-root">
      <div className="footer-section-container">
        <section className="footer-brand">
          <h2>EventHub</h2>
          <p>{translation.tagline}</p>
        </section>

        <div className="footer-links-container">
          <nav aria-labelledby="footer_pageLinks">
            <h3 id="footer_pageLinks">{translation.quickLinks}</h3>
            <ul>
              <li>
                <a href="/">{translation.home}</a>
              </li>
              <li>
                <a href="/events">{translation.events}</a>
              </li>
              <li>
                <a href="/about">{translation.about}</a>
              </li>
              <li>
                <a href="#">{translation.host}</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer_support">
            <h3 id="footer_support">{translation.support}</h3>
            <ul>
              <li>
                <a href="#">{translation.help}</a>
              </li>
              <li>
                <a href="#">{translation.contact}</a>
              </li>
              <li>
                <a href="#">{translation.faq}</a>
              </li>
              <li>
                <a href="#">{translation.terms}</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer_social" className="footer-social">
            <h3 id="footer_social">{translation.followUs}</h3>
            <div className="social-media-links">
              <a href="#" aria-label="Instagram">
                <Instagram aria-hidden="true" size={24} className="social-icon" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook aria-hidden="true" size={24} className="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin aria-hidden="true" size={24} className="social-icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter aria-hidden="true" size={24} className="social-icon" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer-copyrights">
        <p>{translation.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
