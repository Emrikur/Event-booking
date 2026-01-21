import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import CreateEventModal from "./CreateEventModal";
import SuccessModal from "./SuccessModal";

import "../styles/CallToAction.css";

function CallToAction({ fetchCTA }) {
  const [ctaData, setCtaData] = useState(null);
  const { language, translations } = useContext(LanguageContext);

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
          <h2 className="cta__title">
            {language === "EN" ? ctaData.title_en : ctaData.title_sv}
          </h2>
          <p className="cta__text">
            {language === "EN" ? ctaData.subtitle_en : ctaData.subtitle_sv}
          </p>
        </div>
        <button className="cta__button" onClick={() => setIsModalOpen(true)}>
          {language === "EN" ? ctaData.buttonText_en : ctaData.buttonText_sv}
        </button>
      </div>

      {isModalOpen && (
        <CreateEventModal
          role="dialog"
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          role="alertdialog"
          title="Event Created!"
          message="Your event has been published successfully"
          buttonText="View My Event"
          onClick={() => {
            setIsSuccessModalOpen(false);
            navigate(`/events/${createdEventSlug}`);
          }}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </section>
  );
}

export default CallToAction;
