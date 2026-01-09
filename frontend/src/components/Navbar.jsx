import "../styles/navbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <button className="createEvent">Create Event</button>
      </div>
    </nav>
  );
};

export default Navbar;
