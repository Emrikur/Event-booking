import "../styles/eventPageStyles.css";
import { CalendarClockIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { UsersRound } from "lucide-react";

import DropdownMenu from "../components/DropdownMenu";
import { useState, useEffect } from "react";
import { getEvents } from "../services/sanity";
import { urlFor } from "../services/sanity";

const EventsComponent = () => {
  const categories = useState(["All events"]);
  const [events, setEvents] = useState(null);

  const defaultImages = {
    wellness: "../assets/default-wellness.webp",
    music: "../assets/default-music.webp",
    food: "../assets/default-food.webp",
    workshop: "../assets/default-workshop.webp",
  };

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setEvents(data);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <section className="category">
        <div className="category-bar">
          {categories[0]}
          <DropdownMenu />
        </div>
      </section>
      <section className="event-list">
        {events &&
          events.map((event) => {
            const imageUrl = event.image
              ? urlFor(event.image).url()
              : defaultImages[event.category];
            return (
              <div key={event.title} className="event">
                <span className="category-info">{event.category.title}</span>
                <img src={imageUrl} alt="Event image" className="event-image" />
                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">
                    <CalendarClockIcon />{" "}
                    {new Date(event.eventDateTime).toLocaleString()}
                  </p>
                  <p className="event-location">
                    <MapPinIcon /> {event.location}
                  </p>
                  <p className="event-spots">
                    <UsersRound />
                    {event.maxParticipants} spots left
                  </p>
                </div>
                <div className="event-action">
                  <button className="event-join">Join Event</button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default EventsComponent;
