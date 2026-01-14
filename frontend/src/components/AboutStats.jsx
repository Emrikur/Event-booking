import { useEffect, useState } from "react";
import { getAboutStats } from "../services/sanity";

import "../styles/about/AboutStats.css";

export default function AboutStats() {
  const [stats, setStats] = useState(null);

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
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
