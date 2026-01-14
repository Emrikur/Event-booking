import "../styles/navbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/eventhub-logo.png";

import CreateEventModal from "./CreateEventModal";
import SuccessModal from "./SuccessModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const showMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("floatMenu");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("floatMenu");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="hamburger-menu" onClick={showMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="logo">
          <img src={logo2} alt="EventHub Logo" />
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={closeMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="button-section">
          <button className="createEvent" onClick={() => setIsModalOpen(true)}>
            Create Event
          </button>
        </div>
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
