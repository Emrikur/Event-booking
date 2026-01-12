import { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";

import { Asterisk } from "lucide-react";

import "../styles/ModalStyles.css";

function CreateEventModal({ onClose, onSuccess }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [whatToBring, setWhatToBring] = useState("");

  const [eventImageFile, setEventImageFile] = useState(null);
  const [eventImagePreview, setEventImagePreview] = useState(null);

  const [hostName, setHostName] = useState("");
  const [hostBio, setHostBio] = useState("");
  const [hostAvatar, setHostAvatar] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setEventImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setEventImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!date) {
      newErrors.date = "Date is required";
    }
    if (!time) {
      newErrors.time = "Time is required";
    }
    if (!location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!hostName.trim()) {
      newErrors.hostName = "Host name is required";
    }
    // if (!eventImageFile) {
    //   newErrors.eventImage = "Event image is required";
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const eventDateTime = `${date}T${time}:00.000Z`;

    const eventData = {
      title,
      eventDateTime,
      location,
      price: Number(price) || null,
      maxParticipants: Number(maxParticipants) || null,
      description: description || null,
      whatToBring: whatToBring
        ? whatToBring.split(",").map((item) => item.trim())
        : [],
      eventImageFile: eventImagePreview,
      hostName,
      hostBio: hostBio || null,
      hostAvatar: hostAvatar || null,
    };

    try {
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();

      // Clear UI on success
      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
      setPrice("");
      setMaxParticipants("");
      setDescription("");
      setWhatToBring("");
      setEventImageFile(null);
      setEventImagePreview(null);
      setHostName("");
      setHostBio("");
      setHostAvatar("");
      setErrors({});

      onClose();
      onSuccess();
    } catch (error) {
      console.error("Error creating event:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCancel() {
    // Clear UI on close
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setPrice("");
    setMaxParticipants("");
    setDescription("");
    setWhatToBring("");
    setEventImageFile(null);
    setEventImagePreview(null);
    setHostName("");
    setHostBio("");
    setHostAvatar("");

    onClose();
  }

  return (
    <ModalWrapper
      title="Create Event"
      subtitle="Fill in the details to create a new event"
      onClose={handleCancel}
    >
      <form className="modal__form" onSubmit={handleSubmit}>
        <div className="modal__form-group">
          <label htmlFor="title" className="modal__label">
            Title
            <span className="modal__required">
              <Asterisk size={20} />
            </span>
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="Event title"
          />
          {errors.title && <span className="modal__error">{errors.title}</span>}
        </div>

        <div className="modal__form-group">
          <label htmlFor="date" className="modal__label">
            Date
            <span className="modal__required">
              <Asterisk size={20} />
            </span>
          </label>
          <input
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="modal__input"
          />
          {errors.date && <span className="modal__error">{errors.date}</span>}
        </div>

        <div className="modal__form-group">
          <label htmlFor="time" className="modal__label">
            Time{" "}
            <span className="modal__required">
              <Asterisk size={20} />
            </span>
          </label>
          <input
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            className="modal__input"
          />
          {errors.time && <span className="modal__error">{errors.time}</span>}
        </div>

        <div className="modal__form-group">
          <label htmlFor="location" className="modal__label">
            Location{" "}
            <span className="modal__required">
              <Asterisk size={20} />
            </span>
          </label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="Event location"
          />
          {errors.location && (
            <span className="modal__error">{errors.location}</span>
          )}
        </div>

        <div className="modal__form-group">
          <label htmlFor="price" className="modal__label">
            Price
          </label>
          <input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="Enter price in SEK (leave empty if free)"
          />
        </div>

        <div className="modal__form-group">
          <label htmlFor="maxParticipants" className="modal__label">
            Max Participants
          </label>
          <input
            id="maxParticipants"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
            type="number"
            className="modal__input"
            placeholder="Max number of attendees"
          />
        </div>

        <div className="modal__form-group">
          <label htmlFor="description" className="modal__label">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="modal__textarea"
            rows="3"
            placeholder="Event description"
          ></textarea>
        </div>

        <div className="modal__form-group">
          <label htmlFor="whatToBring" className="modal__label">
            What to Bring
          </label>
          <input
            id="whatToBring"
            value={whatToBring}
            onChange={(e) => setWhatToBring(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="e.g. Yoga mat, towel..."
          />
        </div>

        <div className="modal__form-group">
          <label htmlFor="eventImage" className="modal__label">
            Event Image
          </label>
          <input
            id="eventImage"
            onChange={handleImageChange}
            type="file"
            accept="image/*"
            className="modal__input"
          />
          {eventImagePreview && (
            <div className="modal__image-preview">
              <img src={eventImagePreview} alt="" />
            </div>
          )}
        </div>

        <div className="modal__form-group">
          <label htmlFor="hostName" className="modal__label">
            Host Name
            <span className="modal__required">
              <Asterisk size={20} />
            </span>
          </label>
          <input
            id="hostName"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="Host name or studio"
          />
          {errors.hostName && (
            <span className="modal__error">{errors.hostName}</span>
          )}
        </div>

        <div className="modal__form-group">
          <label htmlFor="hostBio" className="modal__label">
            Host Bio
          </label>
          <textarea
            id="hostBio"
            value={hostBio}
            onChange={(e) => setHostBio(e.target.value)}
            className="modal__textarea"
            rows="2"
            placeholder="Short bio about the host"
          ></textarea>
        </div>

        <div className="modal__form-group">
          <label htmlFor="hostAvatar" className="modal__label">
            Host Avatar (initials)
          </label>
          <input
            id="hostAvatar"
            value={hostAvatar}
            onChange={(e) => setHostAvatar(e.target.value)}
            type="text"
            className="modal__input"
            placeholder="e.g. YS"
          />
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
            className="modal__button modal__button--primary"
          >
            {isSubmitting ? "Creating..." : "Create Event"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default CreateEventModal;
