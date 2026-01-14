import "../styles/eventPageStyles.css";
import { CalendarClockIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

import DropdownMenu from "../components/DropdownMenu";
import { useState, useEffect } from "react";
import { getEvents } from "../services/sanity";
import { urlFor } from "../services/sanity";

const EventsComponent = () => {
  const [allEvents, setAllEvents] = useState(null);
  const [events, setEvents] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();

  const defaultImages = {
    wellness: "../assets/default-wellness.webp",
    music: "../assets/default-music.webp",
    food: "../assets/default-food.webp",
    workshop: "../assets/default-workshop.webp",
  };

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setAllEvents(data); // Store all events separately
      setEvents(data); // Initialize displayed events with all events
    }

    fetchEvents();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All events") {
      setEvents(allEvents);
    } else {
      const filteredEvents = allEvents.filter(
        (event) => event.category.title === category
      );
      setEvents(filteredEvents);
    }
  };

  const handleAllEventsClick = () => {
    setEvents(allEvents);
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
                  <button className="event-join">
                    <Link className="event-join"
                    to={{
                      pathname: `/events/${event.slug.current}`
                    }}>Join Event
                    </Link>
                  </button>
                </div>

              </div>
            );
          })}
      </section>
    </>
  );
};

export default EventsComponent;
