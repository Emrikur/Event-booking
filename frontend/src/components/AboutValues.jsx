import "../styles/about/AboutValues.css";
import  {Rocket, Accessibility, Sprout, Lock, Handshake, Sparkles, Star}  from "lucide-react";

export default function AboutValues() {
  return (
    <>
      <section className="about-values-section">
        <div className="values-header-titles">
          <div className="value-tag">Our Values</div>
          <h2>What We Stand For</h2>
        </div>
        <div className="values-flex-container">
          <div>
            <div className="Value-icon-box"><Handshake/></div>
            <h3>Community First</h3>
            <p>We prioritize building genuine connections and fostering inclusive communities where everyone feels welcome.</p>
          </div>
          <div>
            <div className="Value-icon-box"><Sparkles/></div>
            <h3>Quality Experiences</h3>
            <p>Every event on our platform is curated to ensure meaningful, high-quality experiences for all participants.</p>
          </div>
          <div>
            <div className="Value-icon-box"><Rocket/></div>
            <h3>Innovation</h3>
            <p>We constantly evolve our platform with new features that make event creation and discovery seamless.</p>
          </div>
          <div>
            <div className="Value-icon-box"><Sprout/></div>
            <h3>Sustainability</h3>
            <p>We encourage eco-friendly events and practices that minimize environmental impact.</p>
          </div>
          <div>
            <div className="Value-icon-box"><Accessibility/></div>
            <h3>Accessibility</h3>
            <p>Everyone deserves access to great experiences. We make events discoverable and affordable for all.</p>
          </div>
          <div>
            <div className="Value-icon-box"><Lock/></div>
            <h3>Trust & Safety</h3>
            <p>We maintain a secure platform where hosts and attendees can connect with confidence.</p>
          </div>
        </div>
      </section>
    </>
  );
}
