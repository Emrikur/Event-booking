import { formatEventDateTime } from "../utils/datehelper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { CalendarClock, MapPin, UsersRound } from "lucide-react";

import DropdownMenu from "../components/DropdownMenu";
import { urlFor } from "../services/sanity";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

import "../styles/eventPageStyles.css";

function EventsComponent() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { filteredEvents, setFilteredEvents, isLoading } =
    useContext(EventContext);
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

  function handleJoinEvent(event, isWaitlist) {
    // setSelectedEvent({ ...event, isWaitlist });
    setIsModalOpen(true);
  }

  //TODO: Change maxParticipants to spotsLeft and fix the display accordingly
  // TODO: Check that waitinglist works correctly (button change)
  //TODO: Add loading state and empty state

  return (
    <>
      <div className="events-page-container">
        <section className="category">
          <div className="category-bar">
            <button className="all-events" onClick={handleAllEventsClick}>
              All events
            </button>
            <DropdownMenu onCategoryChange={handleCategoryChange} />
          </div>
        </section>

        {isLoading && (
          <div className="events__loading">
            <div className="events__spinner"></div>
            <p>Loading Events...</p>
          </div>
        )}

        <section className="event-list">
          {filteredEvents &&
            filteredEvents.map((event) => {
              const imageUrl = event.image
                ? urlFor(event.image).url()
                : defaultImages[event.category];
              const isWaitlist = event.spotsLeft === 0;
              return (
                <div key={event.title} className="event">
                  <span className="category-info">{event.category.title}</span>
                  <img
                    src={imageUrl}
                    alt={event.image?.alt || event.title}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-date">
                      <CalendarClock size={18} />
                      <span>{formatEventDateTime(event.eventDateTime)}</span>
                    </p>
                    <p className="event-location">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </p>
                    <p className="event-spots">
                      <UsersRound size={18} />
                      <span>{event.maxParticipants} spots left</span>
                    </p>
                  </div>
                  <div className="event-card__actions">
                    <Link
                      to={`/events/${event.slug.current}`}
                      className="event-button event-button--outline"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleJoinEvent(event, isWaitlist)}
                      className={`event-button ${
                        isWaitlist
                          ? "event-button--secondary"
                          : "event-button--primary"
                      }`}
                    >
                      {isWaitlist ? "Join Waitlist" : "Join Event"}
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
      </div>

      {/* Join Event Modal */}
      {isModalOpen && selectedEvent && (
        <JoinEventModal
          event={selectedEvent}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
            loadEvents();
          }}
          isWaitlist={selectedEvent.isWaitlist}
        />
      )}

      {/* Success Modal - Join Event */}
      {isSuccessModalOpen && !selectedEvent.isWaitlist && (
        <SuccessModal
          title="You're All Set!"
          message={
            <>
              Your spot has been reserved for{" "}
              <strong>{selectedEvent.title}</strong>
            </>
          }
          buttonText="View Event Details"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}

      {/* Success Modal - Join Waitlist */}
      {isSuccessModalOpen && selectedEvent.isWaitlist && (
        <SuccessModal
          title="You're on the Waitlist!"
          message={
            <>
              You're on the waitlist for <strong>{selectedEvent.title}</strong>.
              We'll send you an email as soon as a spot opens up!
            </>
          }
          buttonText="Browse More Events"
          onClose={() => setIsSuccessModalOpen(false)}
          onClick={() => {
            setIsSuccessModalOpen(false);
            navigate("/events");
          }}
          isWaitlist={true}
        />
      )}
    </>
  );
}

export default EventsComponent;
