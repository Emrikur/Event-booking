import "../styles/about/AboutTeam.css";

export default function AboutTeam() {

  //TODO Skall ersättas med Team-data från Sanity
const team = [
  {
    id: 1,
    firstName: "Manuela",
    surname: "Bandova",
    Initials:"MB",
    role: "Co-Founder & CEO",
    description:"Passionate about building communities and creating meaningful connections through technology."
  },
  {
    id: 2,
    firstName: "Karol",
    surname: "Melnicki",
    Initials:"KM",
    role: "Co-Founder & CTO",
    description:"Tech enthusiast with 10+ years of experience building scalable platforms for millions of users."
  },
  {
    id: 3,
    firstName: "Joakim",
    surname: "Erlandsson",
    Initials:"JE",
    role: "Co-Founder & CPO",
    description:"Product designer turned entrepreneur, passionate about creating intuitive experiences that bring people together."
  },
  {
    id: 4,
    firstName: "Linda",
    surname: "Jensen",
    Initials:"LJ",
    role: "Co-Founder & CMO",
    description:"Brand strategist with a passion for storytelling and building communities around shared experiences."
  }
  ]

  return (<>

  <section className="team-section">
    <div className="team-header">
<div className="team-tag">Our team</div>
<h2>Meet the People Behind EventHub</h2>
    </div>

    <div className="team-flex-container">
      {team.map((member) =>
        <div className="member-card" key={member.id}>
          <div className="member-initials-box"><h2>{member.Initials}</h2></div>
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
