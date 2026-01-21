import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getHowItWorks } from "../services/sanity";

import "../styles/HowItWorks.css";

function HowItWorks() {
  const [steps, setSteps] = useState([]);
  const { language, translations } = useContext(LanguageContext);

  useEffect(() => {
    async function loadSteps() {
      const data = await getHowItWorks();
      setSteps(data);
    }
    loadSteps();
  }, []);

  const translation = translations[language].howItWorks;

  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <h2 className="how-it-works__title">{translation.title}</h2>
        <p className="how-it-works__subtitle">{translation.subtitle}</p>
      </div>

      <div className="how-it-works__steps">
        {steps.map((step) => (
          <div key={step._id} className="how-it-works__step">
            <div className="how-it-works__icon">
              <img
                src={step.icon.asset.url}
                alt=""
                className="how-it-works__icon-image"
              />
            </div>
            <h3 className="how-it-works__step-title">
              {" "}
              {language === "EN" ? step.title_en : step.title_sv}
            </h3>
            <p className="how-it-works__step-text">
              {language === "EN" ? step.description_en : step.description_sv}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
