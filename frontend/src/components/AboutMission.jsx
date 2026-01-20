import { useEffect, useState } from "react";
import { getAboutMission } from "../services/sanity";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import "../styles/about/AboutMission.css";

function AboutMission() {
  const [mission, setMission] = useState(null);
  const { language } = useContext(LanguageContext);



  useEffect(() => {
    async function fetchMission() {
      const data = await getAboutMission();
      setMission(data);
    }
    fetchMission();
  }, []);

  if (!mission) return null;
  const badgeText = language === "EN" ? "Our Mission" : "Vår Mission";
  const title = language === "EN" ? mission.title_en : mission.title_sv;
  const description =
    language === "EN" ? mission.description_en : mission.description_sv;

  return (
    <section className="mission-section">
      <div className="mission-content">
      <span className="badge">{badgeText}</span>
        <h2 className="mission-title">  {language === "EN" ? mission.title_en : mission.title_sv}</h2>
        <p> {language === "EN" ? mission.description_en : mission.description_sv}</p>
      </div>
    </section>
  );
}

export default AboutMission;
