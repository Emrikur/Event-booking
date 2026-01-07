import "../styles/navbarStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">EventBook</p>

      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>About us</li>
        </ul>
      </div>

      <button className="createEvent">Create Event</button>
    </nav>
  );
};

export default Navbar;
