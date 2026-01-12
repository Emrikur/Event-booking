import { useState } from "react";
import { useParams } from "react-router-dom";

import JoinEventModal from "../components/JoinEventModal";
import SuccessModal from "../components/SuccessModal";

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

  const { id } = useParams();

  const mockEvent = {
    id: 1,
    title: "Morning Yoga in the Park",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 20, 2025",
    time: "07:00",
    location: "Slottsskogen Park, Gothenburg",
    spotsLeft: 0,
    totalSpots: 30,
    price: "Free",
    description:
      "Start your day with mindfulness and movement in the beautiful surroundings of Slottsskogen Park. This morning yoga session is perfect for all levels, whether you're a complete beginner or an experienced yogi. Our experienced instructor will guide you through a gentle flow practice, focusing on breath work, stretching, and relaxation. The fresh morning air and natural setting will help you connect with nature while finding your inner peace.",
    whatToBring: [
      "Yoga mat (required)",
      "Water bottle",
      "Comfortable clothing",
      "Sunscreen (weather dependent)",
    ],
    host: {
      name: "Yoga Studio Stockholm",
      avatar: "YS",
      bio: "Professional yoga instructors",
      eventsHosted: 50,
    },
  };

  const isWaitlist = mockEvent.spotsLeft === 0;

  return (
    <section className="event-detail">
      {/* Hero Section */}
      <header
        className="event-detail__hero"
        style={{ backgroundImage: `url(${mockEvent.image})` }}
      >
        <div className="event-detail__hero-content">
          <span className="event-detail__category">{mockEvent.category}</span>
          <h1 className="event-detail__title">{mockEvent.title}</h1>
          <p className="event-detail__host">Hosted by {mockEvent.host.name}</p>
        </div>
      </header>

      {/* Event Details Section */}
      <div className="event-detail__wrapper">
        <article className="event-detail__content">
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">Event Details</h2>
            <div className="event-info">
              <div className="event-info__item">
                <span className="event-info__icon">
                  <CalendarClock size={26} />
                </span>
                <div className="event-info__content">
                  <h3>Date & Time</h3>
                  <p>
                    {mockEvent.date} @{mockEvent.time}
                  </p>
                </div>
              </div>

              <div className="event-info__item">
                <span className="event-info__icon">
                  {" "}
                  <MapPin size={26} />
                </span>
                <div className="event-info__content">
                  <h3>Location</h3>
                  <p>{mockEvent.location}</p>
                </div>
              </div>

              <div className="event-info__item">
                <span className="event-info__icon">
                  <UsersRound size={26} />
                </span>
                <div className="event-info__content">
                  <h3>Capacity</h3>
                  <p>
                    {mockEvent.spotsLeft} spots remaining out of{" "}
                    {mockEvent.totalSpots}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About This Event Section */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">About This Event</h2>
            <p className="event-detail__description">{mockEvent.description}</p>
          </section>

          {/* What to Bring Section */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">What to bring</h2>
            <ul className="event-detail__list">
              {mockEvent.whatToBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Meet Your Host */}
          <section className="event-detail__section">
            <h2 className="event-detail__section-title">Meet Your Host</h2>
            <div className="host-card">
              <div className="host-card__avatar">{mockEvent.host.avatar}</div>
              <div className="host-card__info">
                <h3 className="event-detail__host-name">
                  {mockEvent.host.name}
                </h3>
                <p className="event-detail__host-bio">{mockEvent.host.bio}</p>
                <p className="event-detail__host-stats">
                  {mockEvent.host.eventsHosted}+ events hosted
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Booking Card */}
        <aside className="event-detail__booking">
          <div className="booking__spots">
            <div className="booking__spots-number">{mockEvent.spotsLeft}</div>
            <div className="booking__spots-text">Spots Available</div>
          </div>

          <div className="booking__price">
            <div className="booking__price-label">Price per person</div>
            <div className="booking__price-amount">{mockEvent.price}</div>
          </div>

          <button
            className={`booking__button ${
              isWaitlist
                ? "booking__button--secondary"
                : "booking__button--primary"
            }`}
            onClick={() => setIsModalOpen(true)}
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
          event={mockEvent}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
          isWaitlist={isWaitlist}
        />
      )}

      {/* Success Modal Join Event*/}
      {isSuccessModalOpen && (
        <SuccessModal
          title="You're All Set!"
          message={
            <>
              Your spot has been reserved for <strong>{mockEvent.title}</strong>
            </>
          }
          buttonText="View Event Details"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}

      {/* Success Modal Join Waitlist*/}
      {isSuccessModalOpen && isWaitlist && (
        <SuccessModal
          title="You're on the Waitlist!"
          message={
            <>
              You're on the waitlist for <strong>{mockEvent.title}</strong>.
              We'll send you an email as soon as a spot opens up!
            </>
          }
          buttonText="Browse More Events"
          onClose={() => setIsSuccessModalOpen(false)}
          isWaitlist={isWaitlist}
        />
      )}
    </section>
  );
}

export default EventDetailsPage;
