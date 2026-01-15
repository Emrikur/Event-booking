import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/eventhub-logo.png";
import CreateEventModal from "./CreateEventModal";
import SuccessModal from "./SuccessModal";
import { LanguageContext } from "../context/LanguageContext";

import { Globe } from "lucide-react";

import "../styles/navbarStyles.css";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, translations } = useContext(LanguageContext);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const languageMenuRef = useRef();

  const showMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("floatMenu");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("floatMenu");
  };

  function toggleLanguageMenu() {
    setOpen((prev) => !prev);
  }

  function handleLanguageChange(language) {
    setLanguage(language);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        const menu = document.querySelector(".menu");
        menu.classList.remove("floatMenu");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const translation = translations[language].navbar;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="hamburger-menu" ref={hamburgerRef} onClick={showMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="logo">
          <img src={logo2} alt="EventHub Logo" />
        </div>

        <div className="menu" ref={menuRef}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                {translation.home}
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={closeMenu}>
                {translation.events}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                {translation.about}
              </Link>
            </li>
          </ul>
        </div>

        <div className="button-section">
          <button className="createEvent" onClick={() => setIsModalOpen(true)}>
            Create Event
          </button>
          <div className="language-switcher" ref={languageMenuRef}>
            <button className="language-button" onClick={toggleLanguageMenu}>
              <Globe size={20} />
              {language}
            </button>
            {open && (
              <ul className="language-dropdown">
                <li onClick={() => handleLanguageChange("EN")}>English</li>
                <li onClick={() => handleLanguageChange("SV")}>Svenska</li>
              </ul>
            )}
          </div>
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
}

export default Navbar;
