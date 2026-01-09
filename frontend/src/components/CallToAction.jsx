import { useState } from "react";

import CreateEventModal from "./CreateEventModal";

import "../styles/CallToAction.css";

function CallToAction({ title, subtitle, buttonText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{subtitle}</p>
        </div>
        <button className="cta__button" onClick={() => setIsModalOpen(true)}>
          {buttonText}
        </button>
      </div>

      {isModalOpen && (
        <CreateEventModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}

export default CallToAction;
