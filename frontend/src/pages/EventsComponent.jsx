import "../styles/eventPageStyles.css";
import { CalendarClockIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { UsersRound } from "lucide-react";

import DropdownMenu from "../components/DropdownMenu";
import { useState } from "react";
import { urlFor } from "../services/sanity";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

const EventsComponent = () => {
  const { filteredEvents, setFilteredEvents } = useContext(EventContext);
  const { events } = useContext(EventContext);

  const defaultImages = {
    wellness: "../assets/default-wellness.webp",
    music: "../assets/default-music.webp",
    food: "../assets/default-food.webp",
    workshop: "../assets/default-workshop.webp",
  };

  const handleCategoryChange = (category) => {
    if (category === "All events") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(
        (event) => event.category.title === category
      );
      setFilteredEvents(filtered);
    }
  };

  const handleAllEventsClick = () => {
    setFilteredEvents(events);
  };

  return (
    <>
      <section className="category">
        <div className="category-bar">
          <button className="all-events" onClick={handleAllEventsClick}>
            All events
          </button>
          <DropdownMenu onCategoryChange={handleCategoryChange} />
        </div>
      </section>
      <section className="event-list">
        {filteredEvents &&
          filteredEvents.map((event) => {
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
