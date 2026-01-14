import { useEffect, useState } from "react";
import { getHostEventCTA, getJoinCommunityCTA } from "../services/sanity";

import CreateEventModal from "./CreateEventModal";
import SuccessModal from "./SuccessModal";

import "../styles/CallToAction.css";

function CallToAction({ fetchCTA }) {
  const [ctaData, setCtaData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    async function loadCTA() {
      const data = await fetchCTA();
      setCtaData(data);
    }

    loadCTA();
  }, [fetchCTA]);

  if (!ctaData) return null;

  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">{ctaData.title}</h2>
          <p className="cta__text">{ctaData.subtitle}</p>
        </div>
        <button className="cta__button" onClick={() => setIsModalOpen(true)}>
          {ctaData.buttonText}
        </button>
      </div>

      {isModalOpen && (
        <CreateEventModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          title="Event Created!"
          message="Your event has been published successfully"
          buttonText="View My Event"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </section>
  );
}

export default CallToAction;
