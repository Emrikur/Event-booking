import "../styles/navbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">EventBook</p>

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

      <button className="createEvent">Create Event</button>
    </nav>
  );
};

export default Navbar;
