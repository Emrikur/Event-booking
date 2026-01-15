import "../styles/about/AboutTeam.css";
import { useEffect, useState } from "react";
import { getTeam, getTeamSection } from "../services/sanity";

export default function AboutTeam() {
  const [teamSection, setTeamSection] = useState(null);
  const [teamData, setTeamData] = useState([]);

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

  return (
    <>
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="badge">Our Team</span>
            <h2 className="team-title">{teamSection.title}</h2>
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
                <p className="member-card__description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
