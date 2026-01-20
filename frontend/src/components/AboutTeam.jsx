import "../styles/about/AboutTeam.css";
import { useEffect, useState } from "react";
import { getTeam, getTeamSection } from "../services/sanity";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function AboutTeam() {
  const [teamSection, setTeamSection] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    async function fetchData() {
      const section = await getTeamSection();
      const members = await getTeam();
      setTeamSection(section);
      setTeamData(members);
    }

    fetchData();
  }, []);

  if (!teamSection || teamData.length === 0) return null;

  const badgeText = language === "EN" ? "Our Team" : "Vårt team";
  const sectionTitle =
    language === "EN" ? teamSection.title_en : teamSection.title_sv;

  return (
    <>
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="badge">{badgeText}</span>
            <h2 className="team-title">{sectionTitle}</h2>
          </div>
          <div className="team-flex-container">
            {teamData.map((member, index) => (
              <div className="member-card" key={index}>
                <div className="member-initials-box">
                  <h2>{member.initials}</h2>
                </div>
                <h3 className="member-card__name">
                  {member.firstName} {member.surname}
                </h3>
                <h4 className="member-card__role">{member.role}</h4>
                <p className="member-card__description">
                  {language === "EN"
                    ? member.description_en
                    : member.description_sv}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
