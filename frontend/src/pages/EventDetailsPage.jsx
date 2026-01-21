import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventDetails } from "../services/sanity";
import { urlFor } from "../services/sanity";
import JoinEventModal from "../components/JoinEventModal";
import SuccessModal from "../components/SuccessModal";
import { formatEventDateTime } from "../utils/datehelper";
import { getEventsSpots } from "../services/sanity";
import { getEventAvailableSpots } from "../services/api";

import defaultWellness from "../assets/default-wellness.webp";
import defaultMusic from "../assets/default-music.webp";
import defaultFood from "../assets/default-food.webp";
import defaultWorkshop from "../assets/default-workshop.webp";

import {
  CalendarClock,
  MapPin,
  UsersRound,
  CalendarDays,
  Share2,
} from "lucide-react";

import "../styles/EventDetailsPage.css";

function EventDetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [eventSpots, setEventsSpots] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { pageSlug } = useParams();

  const defaultImages = {
    wellness: defaultWellness,
    music: defaultMusic,
    food: defaultFood,
    workshop: defaultWorkshop,
  };

  useEffect(() => {
    async function fetchEventDetails() {
      await getEventDetails(pageSlug)
        .then((data) => setEventDetails(data))
        .catch((err) => console.error(err));
      setIsLoading(false);
    }
    fetchEventDetails();
  }, [pageSlug]);

  const currentEvent = eventDetails.find(
    (detailCard) => detailCard.slug.current === pageSlug
  );

  async function loadEvents() {
    try {
      const data = await getEventsSpots(pageSlug);

      const { spotsLeft } = await getEventAvailableSpots(data._id);
      const eventsWithSpots = {
        ...data,
        spotsLeft,
      };

      setEventsSpots(eventsWithSpots);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, [pageSlug]);

  if (isLoading) {
    return (
      <div className="event-detail__loading">
        <div className="event-detail__spinner"></div>
        <p>Loading Event Details...</p>
      </div>
    );
  }

  if (!currentEvent) {
    return null;
  }

  const eventDateTime = formatEventDateTime(currentEvent.eventDateTime);

  const isWaitlist = eventSpots.spotsLeft === 0;

  return (
    <section className="event-detail">
      {/* Hero Section */}
      <header
        className="event-detail__hero"
        aria-details="Page header with image of the chosen event"
        style={{
          backgroundImage: `url(${
            currentEvent.image
              ? urlFor(currentEvent.image).url()
              : defaultImages[currentEvent.category?.slug?.current] || defaultImages.food
          })`,
        }}
      >{console.log("current slug ",currentEvent.category.slug.current)}
        <div className="event-detail__hero-content">
          <span className="event-detail__category">
            {currentEvent.category.title}
          </span>
          <h1 className="event-detail__title">{currentEvent.title}</h1>
          <p className="event-detail__host">
            Hosted by {currentEvent.hostName}
          </p>
        </div>
      </header>
      <div className="event-detail__wrapper">
        <article className="event-detail__content">
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">Event Details</h2>

            <div className="event-details-info">
              <div className="event-details-info__item">
                <span className="event-details-info__icon">
                  <CalendarClock size={26} />
                </span>
                <div className="event-details-info__content">
                  <h3>Date & Time</h3>
                  <p>{eventDateTime}</p>
                </div>
              </div>

              <div className="event-details-info__item">
                <span className="event-details-info__icon">
                  <MapPin size={26} />
                </span>
                <div className="event-details-info__content">
                  <h3>Location</h3>
                  <p>{currentEvent.location}</p>
                </div>
              </div>

              <div className="event-details-info__item">
                <span className="event-details-info__icon">
                  <UsersRound size={26} />
                </span>
                <div className="event-details-info__content">
                  <h3>Capacity</h3>
                  <p>
                    {eventSpots.spotsLeft} spots remaining out of{" "}
                    {currentEvent.maxParticipants}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About This Event Section */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">About This Event</h2>
            <p
              className={`event-detail__description ${
                !currentEvent.description
                  ? "event-detail__description--empty"
                  : ""
              }`}
            >
              {currentEvent.description || "No description available"}
            </p>
          </section>

          {/* What to Bring Section */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">What to bring</h2>
            {currentEvent.whatToBring &&
            currentEvent.whatToBring.filter((item) => item.trim()).length >
              0 ? (
              <ul className="event-detail__list">
                {currentEvent.whatToBring
                  .filter((item) => item.trim())
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            ) : (
              <p className="event-detail__no-items">No required items</p>
            )}
          </section>

          {/* Meet Your Host */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">Meet Your Host</h2>
            <div className="host-card">
              <div className="host-card__avatar">{currentEvent.hostAvatar}</div>
              <div className="host-card__info">
                <h3 className="event-detail__host-name">
                  {currentEvent.hostName}
                </h3>
                <p
                  className={`event-detail__host-bio ${
                    !currentEvent.hostBio ? "event-detail__host-bio--empty" : ""
                  }`}
                >
                  {currentEvent.hostBio || "No host bio available"}
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Booking Card */}
        <aside className="event-detail__booking">
          <div className="booking__spots">
            <div className="booking__spots-number">{eventSpots.spotsLeft}</div>
            <div className="booking__spots-text">Spots Available</div>
          </div>

          <div className="booking__price">
            <div className="booking__price-label">Price per person</div>
            <div className="booking__price-amount">
              {currentEvent.price === "Free" || !currentEvent.price
                ? "Free"
                : `${currentEvent.price} SEK`}
            </div>
          </div>

          <button
            className={`booking__button ${
              isWaitlist
                ? "booking__button--secondary"
                : "booking__button--primary"
            }`}
            onClick={() => {
              setSelectedEvent({ ...currentEvent, isWaitlist });
              setIsModalOpen(true);
            }}
          >
            {isWaitlist ? "Join Waitlist" : "Join Event"}
          </button>

          <div className="booking__divider"></div>

          <div className="booking__actions">
            <a href="#" className="booking__action">
              <span>
                <CalendarDays size={20} />
              </span>
              Add to Calendar
            </a>
            <a href="#" className="booking__action">
              <span>
                <Share2 size={20} />
              </span>
              Share Event
            </a>
          </div>
        </aside>
      </div>

      {/* Join Event Modal */}
      {isModalOpen && (
        <JoinEventModal
          event={selectedEvent}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
            loadEvents();
          }}
          isWaitlist={selectedEvent?.isWaitlist}
        />
      )}

      {/* Success Modal Join Event*/}
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

      {/* Success Modal Join Waitlist*/}
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
          onClose={() => setIsSuccessModalOpen(false)}
          isWaitlist={true}
        />
      )}
    </section>
  );
}

export default EventDetailsPage;
