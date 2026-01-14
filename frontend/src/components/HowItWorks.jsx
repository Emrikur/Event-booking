import { useEffect, useState } from "react";
import { getHowItWorks } from "../services/sanity";

import "../styles/HowItWorks.css";

function HowItWorks() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function loadSteps() {
      const data = await getHowItWorks();
      setSteps(data);
    }
    loadSteps();
  }, []);

  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <h2 className="how-it-works__title">How it Works</h2>
        <p className="how-it-works__subtitle">
          Three simple steps to your next adventure
        </p>
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
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-text">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
