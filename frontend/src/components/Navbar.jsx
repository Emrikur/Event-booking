import "../styles/navbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import CreateEventModal from "./CreateEventModal";
import SuccessModal from "./SuccessModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const showMenu = () => {
    const menu = document.querySelector(".menu ul");
    menu.classList.toggle("floatMenu");
  };

  return (
    <nav className="navbar">
      <div className="hamburger-menu" onClick={showMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
        <p style={{ fontSize: "20px" }}>EventHub</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="button-section">
        <button className="createEvent" onClick={() => setIsModalOpen(true)}>
          Create Event
        </button>
      </div>

      {isModalOpen && (
        <CreateEventModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          title="Event Created!"
          message="Your event has been published successfully"
          buttonText="View My Event"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
