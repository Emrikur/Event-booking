import { useEffect, useState } from "react";
import { createBooking } from "../services/api";

import ModalWrapper from "./ModalWrapper";

import { CalendarClock, MapPin, Wallet, Asterisk } from "lucide-react";

import "../styles/ModalStyles.css";

function JoinEventModal({ event, onClose, onSuccess, isWaitlist }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};

    // Validate required fields
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const bookingData = {
        event_id: event.id,
        full_name: fullName,
        email: email,
        phone: phone || null,
        notes: notes || null,
      };

      const response = await createBooking(bookingData);
      console.log("Booking successful:", response);

      setFullName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setErrors({});

      onClose();

      //TODO: Implement success modal
      onSuccess();
    } catch (error) {
      console.error("Error submitting booking:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
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
    <ModalWrapper
      title={isWaitlist ? "Join Waitlist" : "Join Event"}
      subtitle={
        isWaitlist
          ? "Get notified when a spot becomes available"
          : "Please fill in your details to reserve your spot"
      }
      onClose={handleCancel}
    >
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
          />
          {errors.fullName && (
            <span className="modal__error">{errors.fullName}</span>
          )}
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
            type="text"
            id="email"
            className="modal__input"
            placeholder="your.email@example.com"
          />
          {errors.email && <span className="modal__error">{errors.email}</span>}
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
            Additional Information (optional)
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

        {errors.submit && (
          <div className="modal__error modal__error--submit">
            {errors.submit}
          </div>
        )}
        <div className="modal__actions">
          <button
            onClick={handleCancel}
            type="button"
            className="modal__button modal__button--outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            // className="modal__button modal__button--primary"
            className={`modal__button ${
              isWaitlist ? "modal__button--secondary" : "modal__button--primary"
            }`}
          >
            {isSubmitting
              ? isWaitlist
                ? "Joining..."
                : "Booking..."
              : isWaitlist
              ? "Join Waitlist"
              : "Book Now"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default JoinEventModal;
