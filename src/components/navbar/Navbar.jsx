import "../../CSS/Navbar.css"
import DarkMode from "../DarkMode/DarkMode.jsx";
const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Amlix</h1>
        <div className="nav-links">
            <DarkMode/>
            <a href="#popular">Popular</a>
            <a href="#top_rated">Top Rated</a>
            <a href="#upcoming">Upcoming</a>
        </div>
    </nav>
  )
}

export default Navbar
