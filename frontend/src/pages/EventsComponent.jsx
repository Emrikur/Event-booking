import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { CalendarClock, MapPin, UsersRound, Search } from "lucide-react";

import { formatEventDateTime } from "../utils/datehelper";
import DropdownMenu from "../components/DropdownMenu";
import JoinEventModal from "../components/JoinEventModal";
import SuccessModal from "../components/SuccessModal";

import { urlFor } from "../services/sanity";
import { EventContext } from "../context/EventContext";

import defaultWellness from "../assets/default-wellness.webp";
import defaultMusic from "../assets/default-music.webp";
import defaultFood from "../assets/default-food.webp";
import defaultWorkshop from "../assets/default-workshop.webp";

import "../styles/eventPageStyles.css";

function EventsComponent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prevPreviewRef = useRef(null);

  const {
    events,
    filteredEvents,
    isLoading,
    filterEvents,
    resetFilters,
    fetchEvents,
  } = useContext(EventContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const defaultImages = {
    wellness: defaultWellness,
    music: defaultMusic,
    food: defaultFood,
    workshop: defaultWorkshop,
  };

  useEffect(() => {
    const isPreview = searchParams.get("preview") === "true";

    if (prevPreviewRef.current !== isPreview) {
      fetchEvents(isPreview);
      prevPreviewRef.current = isPreview;
    }
  }, [searchParams]);

  useEffect(() => {
    if (isLoading) return;
    if (!events.length) return;

    const searchTerm = searchParams.get("query") || "";
    const category = searchParams.get("category") || "";
    const isPreview = searchParams.get("preview");

    if (!searchTerm && !category && isPreview) {
      return;
    }

    if (!searchTerm && !category) {
      resetFilters();
    } else {
      filterEvents(searchTerm, category);
    }
  }, [searchParams, events, isLoading, filterEvents, resetFilters]);

  const handleCategoryChange = (category) => {
    const currentParams = new URLSearchParams(searchParams);

    if (category === "All events") {
      currentParams.delete("category");
    } else {
      currentParams.set("category", category);
    }

    const queryString = currentParams.toString();
    navigate(queryString ? `/events?${queryString}` : "/events");
  };

  const handleAllEventsClick = () => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("query");
    currentParams.delete("category");

    const queryString = currentParams.toString();
    navigate(queryString ? `/events?${queryString}` : "/events");
  };

  function handleJoinEvent(event, isWaitlist) {
    setSelectedEvent({ ...event, isWaitlist });
    setIsModalOpen(true);
  }

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

        {!isLoading && events.length > 0 && filteredEvents.length === 0 && (
          <div className="events__no-results">
            <div className="events__no-results-icon">
              <Search size={40} strokeWidth={2} />
            </div>
            <p>
              No events found matching your criteria. Try adjusting your filters
              or browse all events.
            </p>
          </div>
        )}

        <section className="event-list">
          {filteredEvents.map((event) => {
            const imageUrl = event.image
              ? urlFor(event.image).url()
              : defaultImages[event.category?.title.toLowerCase()] ||
                defaultImages.food;

            const isWaitlist = event.spotsLeft === 0;

            return (
              <div key={event._id} className="event">
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
                    <span>{event.spotsLeft} spots left</span>
                  </p>
                </div>

                <div className="event-card__actions">
                  <Link
                    to={`/events/${event.slug.current}`}
                    className="event-button event-button--outline"
                    aria-label={`View event details for ${event.title}`}
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
          isWaitlist={selectedEvent.isWaitlist}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      {/* Success Modal – Join Event */}
      {isSuccessModalOpen && selectedEvent && !selectedEvent.isWaitlist && (
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

      {/* Success Modal – Waitlist */}
      {isSuccessModalOpen && selectedEvent && selectedEvent.isWaitlist && (
        <SuccessModal
          title="You're on the Waitlist!"
          message={
            <>
              You're on the waitlist for <strong>{selectedEvent.title}</strong>.
              We'll send you an email as soon as a spot opens up!
            </>
          }
          buttonText="Browse More Events"
          isWaitlist
          onClose={() => setIsSuccessModalOpen(false)}
          onClick={() => {
            setIsSuccessModalOpen(false);
            navigate("/events");
          }}
        />
      )}
    </>
  );
}

export default EventsComponent;
