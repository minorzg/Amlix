import { useState } from "react";
import "../../CSS/Navbar.css"
import DarkMode from "../DarkMode/DarkMode.jsx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (e) => {
    if (e.target.closest("a")) setIsOpen(false);
  };

  return (
    <nav className="navbar">
        <h1>Amlix</h1>

        <button
          className={`nav_toggle ${isOpen ? "active" : ""}`}
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className="nav_toggle_bar"></span>
          <span className="nav_toggle_bar"></span>
          <span className="nav_toggle_bar"></span>
        </button>

        <div
          id="nav-links"
          className={`nav-links ${isOpen ? "open" : ""}`}
          onClick={closeMenu}
        >
            <DarkMode/>
            <a href="#popular">Popular</a>
            <a href="#top_rated">Top Rated</a>
            <a href="#upcoming">Upcoming</a>
        </div>
    </nav>
  )
}

export default Navbar
