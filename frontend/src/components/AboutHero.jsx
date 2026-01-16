import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import "../styles/Hero.css";

function AboutHero({ fetchHero }) {
  const [heroData, setHeroData] = useState(null);
  const { language, translations } = useContext(LanguageContext);

  useEffect(() => {
    async function loadHero() {
      const data = await fetchHero();
      setHeroData(data);
    }

    loadHero();
  }, [fetchHero]);

  if (!heroData) return null;

  return (
    <section className="hero">
      <img src={heroData.image.asset.url} alt="An image of people sitting by a table, eating, symbolizing team spirit" className="hero-image" loading="lazy" />
      <div className="hero-overlay">
        <h1 className="hero-title">
          {language === "EN" ? heroData.title_en : heroData.title_sv}
        </h1>
        <p className="hero-text">
          {language === "EN" ? heroData.subtitle_en : heroData.subtitle_sv}
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
