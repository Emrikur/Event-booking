import "../styles/Footer.css";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";


export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-section-container">
<div>
  <h2>EventHub</h2>
  <p>Find, create and book events across Sweden</p>
</div>
<div className="footer-links-container">
<div>
  <h3>Quick Links</h3>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/events">Browse Events</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="#">Host An Event</a></li>
  </ul>
</div>
<div>
  <h3>Support</h3>
  <ul>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Terms Of Service</a></li>
  </ul>
</div>
<div>
  <h3>Follow Us</h3>
  <div className="social-media-links">

    <a href="#"><Instagram width={40} height={40} className="social-icon" /></a>
    <a href="#"><Facebook width={40} height={40} className="social-icon" /></a>
    <a href="#"><Linkedin width={40} height={40} className="social-icon" /></a>
    <a href="#"><Twitter width={40} height={40} className="social-icon" /></a>
  </div>

</div>

</div>
      </div>
      <div className="footer-copyrights">
        <p>&copy; 2026 EventHub. All rights reserved.</p>
      </div>

    </footer>
  );
}
