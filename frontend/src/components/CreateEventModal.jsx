import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

import { Asterisk } from "lucide-react";

import "../styles/ModalStyles.css";

function CreateEventModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [whatToBring, setWhatToBring] = useState("");

  const [hostName, setHostName] = useState("");
  const [hostBio, setHostBio] = useState("");
  const [hostAvatar, setHostAvatar] = useState("");

  const [statusMessage, setStatusMessage] = useState(""); // "success", "error", "invalid-email"
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Clear UI on submit
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setPrice("");
    setMaxParticipants("");
    setDescription("");
    setWhatToBring("");
    setHostName("");
    setHostBio("");
    setHostAvatar("");

    //TODO: Send event data to Sanity
    //TODO: Show confirmation message efter closing modal
    //TODO: StatusMessages and isSubmitting

    console.log("Event Created:");
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
            required
          />
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
            required
          />
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
            required
          />
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
            required
          />
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
            placeholder="Free or 100 SEK"
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
            required
          />
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
            Create Event
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default CreateEventModal;
