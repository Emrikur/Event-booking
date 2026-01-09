import "../styles/Footer.css";
import FB from "../assets/icons/facebook.png";
import IG from "../assets/icons/instagram.png";
import LI from "../assets/icons/linkedin.png";
import X from "../assets/icons/twitter.png";

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

    <a href="#"><img title="Instagram" src={IG} alt="instagram" /></a>
    <a href="#"><img title="Facebook" src={FB} alt="facebook" /></a>
    <a href="#"><img title="LinkedIn" src={LI} alt="linkedin" /></a>
    <a href="#"><img title="X" src={X} alt="X" /></a>
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
