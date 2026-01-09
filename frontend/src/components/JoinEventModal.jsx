import { useEffect, useState } from "react";

import { X, CalendarClock, MapPin, Wallet, Asterisk } from "lucide-react";

import "../styles/JoinEventModal.css";

function JoinEventModal({ event, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [statusMessage, setStatusMessage] = useState(""); // "success", "error", "invalid-email"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hämtas som prop från EventDetailsPage
  // const event = {
  //   id: 1,
  //   title: "Morning Yoga in the Park",
  //   date: "June 20, 2025",
  //   time: "07:00",
  //   location: "Slottsskogen Park, Gothenburg",
  //   price: "Free",
  // };

  // Prevent scroll if modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /**
   * Auto-clear status message after 5 seconds
   * Cleanup prevents memory leaks if component unmounts
   */
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Booking Details:", fullName, email, phone, notes);

    // Clear UI after submit
    setFullName("");
    setEmail("");
    setPhone("");
    setNotes("");

    //TODO: Send booking data to backend?
    //TODO: Show confirmation message efter closing modal
    //TODO: StatusMessages and isSubmitting
    // TODO: Implement backend logic to decrement event capacity on registration

    onClose();
  }

  function handleCancel() {
    // Clear UI on close
    setFullName("");
    setEmail("");
    setPhone("");
    setNotes("");

    onClose();
  }

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="modal__close" onClick={onClose}>
            {" "}
            <X size={20} />
          </button>
          <h2 className="modal__title">Join Event</h2>
          <p className="modal__subtitle">
            Please fill in your details to reserve your spot
          </p>
          <div className="modal__divider"></div>
        </div>

        <div className="modal__event-summary">
          <h3 className="modal__event-title">{event.title}</h3>
          <div className="modal__event-info">
            <div className="modal__event-item">
              <span className="modal__event-icon">
                <CalendarClock size={20} />
              </span>
              <p className="modal__event-text">
                {event.date} @{event.time}
              </p>
            </div>

            <div className="modal__event-item">
              <span className="modal__event-icon">
                <MapPin size={20} />
              </span>
              <p className="modal__event-text">{event.location}</p>
            </div>

            <div className="modal__event-item">
              <span className="modal__event-icon">
                <Wallet size={20} />
              </span>
              <p className="modal__event-text">{event.price}</p>
            </div>
          </div>
        </div>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__form-group">
            <label htmlFor="fullName" className="modal__label">
              Full Name{" "}
              <span className="modal__required">
                <Asterisk size={20} />
              </span>
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              id="fullName"
              className="modal__input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="modal__form-group">
            <label htmlFor="email" className="modal__label">
              Email Address{" "}
              <span className="modal__required">
                <Asterisk size={20} />
              </span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="modal__input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="modal__form-group">
            <label htmlFor="phone" className="modal__label">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              className="modal__input"
              placeholder="+46 70 123 45 67"
            />
          </div>

          <div className="modal__form-group">
            <label htmlFor="notes" className="modal__label">
              Additional Information (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              id="notes"
              className="modal__textarea"
              rows="4"
              placeholder="Any special requirements or questions..."
            ></textarea>
          </div>

          <div className="modal__actions">
            <button
              onClick={handleCancel}
              type="button"
              className="modal__button modal__button--secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="modal__button modal__button--primary"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinEventModal;
