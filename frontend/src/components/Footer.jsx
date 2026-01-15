import "../styles/Footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-section-container">
        <section className="footer-brand">
          <h2>EventHub</h2>
          <p>Find, create and book events across Sweden</p>
        </section>

        <div className="footer-links-container">
          <section>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/events">Browse Events</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#">Host An Event</a>
              </li>
            </ul>
          </section>

          <section>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
            </ul>
          </section>

          <section className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-media-links">
              <a href="#" aria-label="Instagram">
                <Instagram sixe={24} className="social-icon" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook sixe={24} className="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin sixe={24} className="social-icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter sixe={24} className="social-icon" />
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="footer-copyrights">
        <p>&copy; 2026 EventHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
