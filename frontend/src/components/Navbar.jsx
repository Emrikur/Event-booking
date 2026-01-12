import "../styles/navbarStyles.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".menu");
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
        <img src={logo} alt="EventHub Logo" />
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
        <button className="createEvent">Create Event</button>
      </div>
    </nav>
  );
};

export default Navbar;
