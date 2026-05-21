import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bensonOpen, setBensonOpen] = useState(false);

  return (
    <header className="header">

      {/* Background image section with logo */}
      <div className="header-hero">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
          alt="header background"
          className="header-bg-img"
        />
        <div className="header-overlay" />
        <div className="header-logo-center">
          <div className="logo-icon">W</div>
          <div className="logo-main">WATERFRONT</div>
          <div className="logo-sub">CAFE &nbsp;|&nbsp; BAR &nbsp;|&nbsp; BISTRO</div>
        </div>
      </div>

      {/* Navigation bar below */}
      <nav className="navbar">
        <Link to="/" className="logo" />
        <ul className="nav-links">
          <li onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <span>About Us ▾</span>
            {aboutOpen && (
              <ul className="dropdown">
                <li><Link to="/about-us">The Waterfront Café</Link></li>
                <li><Link to="/gallery">The Gallery</Link></li>
                <li><Link to="/rewards">Rewards Card</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/menu">Menus</Link></li>
          <li><Link to="/find-us">Find Us</Link></li>
          <li onMouseEnter={() => setBensonOpen(true)} onMouseLeave={() => setBensonOpen(false)}>
            <span>Celebrating Benson ▾</span>
            {bensonOpen && (
              <ul className="dropdown">
                <li><Link to="/history">The History of Benson</Link></li>
                <li><Link to="/things-to-do">Things to Do</Link></li>
                <li><Link to="/wildlife">Benson Wildlife</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;