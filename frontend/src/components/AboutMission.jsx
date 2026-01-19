import { useEffect, useState } from "react";
import { getAboutMission } from "../services/sanity";

import "../styles/about/AboutMission.css";

function AboutMission() {
  const [mission, setMission] = useState(null);

  useEffect(() => {
    async function fetchMission() {
      const data = await getAboutMission();
      setMission(data);
    }
    fetchMission();
  }, []);

  if (!mission) return null;

  return (
    <section className="mission-section">
      <div className="mission-content">
        <span className="badge">Our Mission</span>
        <h2 role="The company's mission header" className="mission-title">{mission.title}</h2>
        <p role="The company's mission description">{mission.description}</p>
      </div>
    </section>
  );
}

export default AboutMission;
