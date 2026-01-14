import { useEffect, useState } from "react";

import "../styles/Hero.css";

function AboutHero({ fetchHero }) {
  const [heroData, setHeroData] = useState(null);

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
      <img src={heroData.image.asset.url} alt="" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-text">{heroData.subtitle}</p>
      </div>
    </section>
  );
}

export default AboutHero;
