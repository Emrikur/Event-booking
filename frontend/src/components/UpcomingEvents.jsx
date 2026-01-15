import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getUpcomingEvents } from "../services/sanity";
import { formatEventDateTime } from "../utils/datehelper";
import { getEventAvailableSpots } from "../services/api";

import JoinEventModal from "../components/JoinEventModal";
import SuccessModal from "../components/SuccessModal";

import defaultWellness from "../assets/default-wellness.webp";
import defaultMusic from "../assets/default-music.webp";
import defaultFood from "../assets/default-food.webp";
import defaultWorkshop from "../assets/default-workshop.webp";

import { CalendarClock, MapPin, UsersRound } from "lucide-react";

import "../styles/UpcomingEvents.css";

function UpcomingEvents() {
  const navigate = useNavigate();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const defaultImages = {
    wellness: defaultWellness,
    music: defaultMusic,
    food: defaultFood,
    workshop: defaultWorkshop,
  };

  async function loadEvents() {
    try {
      const data = await getUpcomingEvents();

      const eventsWithSpots = await Promise.all(
        data.map(async (event) => {
          const { spotsLeft } = await getEventAvailableSpots(event._id);
          return { ...event, spotsLeft };
        })
      );

      setUpcomingEvents(eventsWithSpots);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function handleJoinEvent(event, isWaitlist) {
    setSelectedEvent({ ...event, isWaitlist });
    setIsModalOpen(true);
  }

  return (
    <>
      {isLoading && (
        <div className="upcoming-events__loading">
          <div className="upcoming-events__spinner"></div>
          <p>Loading Upcoming Events...</p>
        </div>
      )}

      <section className="upcoming-events">
        <div className="upcoming-events-header">
          <h2 className="upcoming-events-title">Upcoming Events</h2>
          <Link to="/events" className="see-all-events">
            See all Events →
          </Link>
        </div>

        <div className="upcoming-events-list">
          {upcomingEvents.map((event) => {
            const imageUrl = event.image?.asset?.url
              ? event.image.asset.url
              : defaultImages[event.category?.slug?.current] ||
                defaultImages.workshop;

            const isWaitlist = event.spotsLeft === 0;

            return (
              <div key={event._id} className="event-card">
                <div className="event-card__image-wrapper">
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className="event-image"
                  />
                  {event.category.title && (
                    <span className="event-card__category-badge">
                      {event.category.title}
                    </span>
                  )}
                </div>

                <div className="event-card__content">
                  <h3 className="event-card__content--title">{event.title}</h3>
                  <p className="event-meta">
                    <CalendarClock size={18} />
                    <span>{formatEventDateTime(event.eventDateTime)}</span>
                  </p>
                  <p className="event-meta">
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
        </div>
      </section>

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

export default UpcomingEvents;
