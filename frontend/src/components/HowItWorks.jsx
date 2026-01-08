import { Search, TicketCheck, Sparkles } from "lucide-react";

import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <h2 className="how-it-works__title">How it Works</h2>
        <p className="how-it-works__subtitle">
          Three simple steps to your next adventure
        </p>
      </div>

      <div className="how-it-works__steps">
        <div className="how-it-works__step">
          <div className="how-it-works__icon">
            <Search size={26} />
          </div>
          <h3 className="how-it-works__step-title">Browse Events</h3>
          <p className="how-it-works__step-text">
            Explore hundreds of events across different categories. Use filters
            to find exactly what you're looking for.
          </p>
        </div>

        <div className="how-it-works__step">
          <div className="how-it-works__icon">
            <TicketCheck size={26} />
          </div>
          <h3 className="how-it-works__step-title">Book Your Spot</h3>
          <p className="how-it-works__step-text">
            Reserve your space with just a few clicks. Get instant confirmation
            and all event details.
          </p>
        </div>

        <div className="how-it-works__step">
          <div className="how-it-works__icon">
            <Sparkles size={26} />
          </div>
          <h3 className="how-it-works__step-title">Enjoy the Experience</h3>
          <p className="how-it-works__step-text">
            Show up and have fun! Connect with others and create lasting
            memories.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
