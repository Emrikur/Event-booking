import { useEffect, useState } from "react";
import { getAboutStats } from "../services/sanity";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import "../styles/about/AboutStats.css";

export default function AboutStats() {
  const [stats, setStats] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    async function fetchStats() {
      const data = await getAboutStats();
      setStats(data.stats);
    }
    fetchStats();
  }, []);

  if (!stats) return null;

  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index}>
          <h2>{stat.number}</h2>
          <p>{language === "EN" ? stat.label_en : stat.label_sv}</p>
        </div>
      ))}
    </section>
  );
}
