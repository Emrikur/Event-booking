import yogaImg from "../assets/yoga.jpg";
import cookingImg from "../assets/cooking.jpg";
import cameraImg from "../assets/camera.jpg";
import { CalendarClock, MapPin, UsersRound } from "lucide-react";
import "../styles/UpcomingEvents.css";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="upcoming-events-header">
      <h2 className="upcoming-events-title">Upcoming Events</h2>
      <div className="see-all-events">See all events →</div>
      </div>
      <div className="upcoming-events-list">
        <div className="event-card">
          <img src= {yogaImg} alt="Morning Yoga in the Park" className="event-image"/>

          <h3 className="event-title">Morning Yoga in the Park</h3>
          <p className="event-meta"> <CalendarClock size={18} /> June 20, 2025 @07:00</p>
          <p className="event-meta"><MapPin size={18} /> Slottsskogen, Gothenburg</p>
          <p className="event-spots"><UsersRound size={18} /> 15 spots left</p>

          <button className="event-button">Join Event</button>
        </div>


        <div className="event-card">
          <img src={cookingImg} alt="Cooking" className="event-image"/>
          <h3 className="event-title">Fresh Pasta</h3>
          <p className="event-meta"><CalendarClock size={18} /> May 26, 2025 @11:00</p>
          <p className="event-meta"><MapPin size={18} /> Södermalm, Stockholm</p>
          <p className="event-spots"><UsersRound size={18} /> 20 spots left</p>
          <button className="event-button">Join Event</button>
        </div>


        <div className="event-card">
          <img src= {cameraImg} alt="Camera" className="event-image" />
          <h3 className="event-title"> Photography Workshop </h3>
          <p className="event-meta"><CalendarClock size={18} /> May 24, 2025 @10:00</p>
          <p className="event-meta"><MapPin size={18} /> Haga, Göteborg</p>
          <p className="event-spots"><UsersRound size={18} /> 4 spots left</p>
          <button className="event-button">Join Event</button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
