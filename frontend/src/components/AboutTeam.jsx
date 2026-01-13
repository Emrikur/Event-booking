import "../styles/about/AboutTeam.css";
import { useEffect, useState } from "react";
import { getTeam } from "../services/sanity";

export default function AboutTeam() {
 const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      await getTeam()
      .then((data) => setTeamData(data))
      .catch((err) => console.error(err));
    }

    fetchTeam();
  }, []);



  return (
  <>

  <section className="team-section">
    <div className="team-header">
<div className="team-tag">Our team</div>
<h2>Meet the People Behind EventHub</h2>
    </div>

    <div className="team-flex-container">
      {teamData.map((member) =>
        <div className="member-card" key={member._id}>
          <div className="member-initials-box"><h2>{member.initials}</h2></div>
          <h3>{member.firstName} {member.surname}</h3>
          <h4>{member.role}</h4>
          <p>{member.description}</p>
        </div>
)
          }
    </div>

  </section>

  </>
  )
}
