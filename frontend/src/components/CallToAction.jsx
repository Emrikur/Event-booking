import { useState } from "react";

import CreateEventModal from "./CreateEventModal";

import "../styles/CallToAction.css";

function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Want to Host an Event?</h2>
          <p className="cta__text">
            Join thousands of hosts creating amazing experiences.
          </p>
        </div>
        <button className="cta__button" onClick={() => setIsModalOpen(true)}>
          Start Hosting
        </button>
      </div>

      {isModalOpen && (
        <CreateEventModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}

export default CallToAction;
