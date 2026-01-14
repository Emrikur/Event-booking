import "../styles/eventPageStyles.css";
import yogaImage from "../assets/yogaImage.png";
import { CalendarClockIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { UsersRound } from "lucide-react";

import DropdownMenu from "../components/DropdownMenu";
import { Link } from "react-router-dom";

const EventsComponent = () => {
  const categories = ["All events", "Category"];


  return (
    <>
      <section className="category">
        <div className="category-bar">
          {categories[0]}
          <DropdownMenu />
        </div>
      </section>

      <section className="event-list">
        <div className="event">
          <span className="category-info">{categories[1]}</span>
          <img src={yogaImage} alt="Yoga Event" className="event-image" />
          <div className="event-info">
            <h3 className="event-title">Morning Yoga In The Park</h3>
            <p className="event-date">
              <CalendarClockIcon /> June 20, 2025 @07:00
            </p>
            <p className="event-location">
              <MapPinIcon /> Slottsskogen, Gothenburg
            </p>
            <p className="event-spots">
              <UsersRound /> 15 spots left
            </p>
          </div>
          <div className="event-action">
            <button className="event-join">Join Event</button>
          </div>
        </div>

        <div className="event">
          <span className="category-info">{categories[1]}</span>
          <img src={yogaImage} alt="Yoga Event" className="event-image" />
          <div className="event-info">
            <h3 className="event-title">Morning Yoga In The Park</h3>
            <p className="event-date">
              <CalendarClockIcon /> June 20, 2025 @07:00
            </p>
            <p className="event-location">
              <MapPinIcon /> Slottsskogen, Gothenburg
            </p>
            <p className="event-spots">
              <UsersRound /> 15 spots left
            </p>
          </div>
          <div className="event-action">
            <button className="event-join">Join Event</button>
          </div>
        </div>

        <div className="event">
          <span className="category-info">{categories[1]}</span>
          <img src={yogaImage} alt="Yoga Event" className="event-image" />
          <div className="event-info">
            <h3 className="event-title">Morning Yoga In The Park</h3>
            <p className="event-date">
              <CalendarClockIcon /> June 20, 2025 @07:00
            </p>
            <p className="event-location">
              <MapPinIcon /> Slottsskogen, Gothenburg
            </p>
            <p className="event-spots">
              <UsersRound /> 15 spots left
            </p>
          </div>
          <div className="event-action">
            <button className="event-join">Join Event</button>
          </div>
        </div>

        <div className="event">
          <span className="category-info">{categories[1]}</span>
          <img src={yogaImage} alt="Yoga Event" className="event-image" />
          <div className="event-info">
            <h3 className="event-title">Morning Yoga In The Park</h3>
            <p className="event-date">
              <CalendarClockIcon /> June 20, 2025 @07:00
            </p>
            <p className="event-location">
              <MapPinIcon /> Slottsskogen, Gothenburg
            </p>
            <p className="event-spots">
              <UsersRound /> 15 spots left
            </p>
          </div>
          <div className="event-action">
            <button className="event-join">Join Event</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsComponent;
