import { useEffect, useState } from "react";
import { getHero } from "../services/sanity";

import "../styles/Hero.css";

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      const data = await getHero();
      setHeroData(data);
    }

    fetchHero();
  }, []);

  return (
    <section className="hero">
      {heroData && (
        <>
          <img
            src={heroData.image.asset.url}
            alt="Hero"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">{heroData.title}</h1>
            <p className="hero-text">{heroData.subtitle}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Hero;
