import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronLeft } from "react-icons/fi";
import cls from "./Header.module.css";
import logo from "../../assets/logo.png";

const menuLinks = [
  {
    label: "About Us",
    items: [
      { label: "The Waterfront Café | Bar | Bistro", to: "/about-us" },
      { label: "The Gallery", to: "/gallery" },
      { label: "Rewards Card", to: "/reward-card" },
    ],
  },
  { label: "Menus", to: "/menu" },
  { label: "Find Us", to: "/find-us" },
  {
    label: "Celebrating Benson",
    items: [
      { label: "The History of Benson", to: "/the-history-of-benson" },
      { label: "Things To Do", to: "/things-to-do" },
      { label: "Benson Wildlife", to: "/benson-wildlife" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const lastScrollY = useRef(0);
  const closeTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect for header hide/show
 // Scroll effect only for Home page
useEffect(() => {
  const onScroll = () => {
    const current = window.scrollY;

    // Home page only
    if (location.pathname === "/") {
      const hero = document.querySelector(".hero");

      if (hero) {
        const heroHeight = hero.offsetHeight;

        // hide at half hero height
        const hidePoint = heroHeight / 2;

        setScrolled(current > 30);

        // header moves away while scrolling
        setHidden(current >= hidePoint);
      }
    } else {
      // normal behavior for all other pages
      setScrolled(current > 30);
      setHidden(false);
    }

    lastScrollY.current = current;
  };

  window.addEventListener("scroll", onScroll);

  return () =>
    window.removeEventListener("scroll", onScroll);

}, [location.pathname]);
  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setDropdown(null);
  }, [location]);

  // Dropdown open/close with delay
  const handleDropdownEnter = (label) => {
    clearTimeout(closeTimeout.current);
    setDropdown(label);
  };
  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => setDropdown(null), 120);
  };

  // Desktop nav
  const renderNav = () => (
    <nav className={cls["header-nav"]} aria-label="Primary navigation">
      {menuLinks.map((link) =>
        link.items ? (
          <div
            key={link.label}
            className={cls["nav-dropdown"]}
            onMouseEnter={() => handleDropdownEnter(link.label)}
            onMouseLeave={handleDropdownLeave}
            style={{ position: "relative" }}
          >
            <button
              className={
                cls["header-link"] +
                (dropdown === link.label ? " " + cls.active : "")
              }
              aria-haspopup="true"
              aria-expanded={dropdown === link.label}
              tabIndex={0}
            >
              {link.label} <FiChevronDown style={{ marginLeft: 6, fontSize: 18 }} />
            </button>
            <div
              className={
                cls["header-dropdown"] +
                (dropdown === link.label ? " " + cls.open : "")
              }
            >
              {link.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    cls["header-dropdown-link"] + (isActive ? " " + cls.active : "")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              cls["header-link"] + (isActive ? " " + cls.active : "")
            }
          >
            {link.label}
          </NavLink>
        )
      )}
    </nav>
  );

  // Mobile nav
  const renderMobileNav = () => (
    <nav className={cls["mobile-nav"] + (mobileOpen ? " " + cls.open : "")}
      aria-label="Mobile navigation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setMobileOpen(false);
        }
      }}
    >
      {menuLinks.map((link) =>
        link.items ? (
          <div key={link.label} style={{ width: "100%" }}>
            <button
              className={cls["mobile-nav-link"]}
              onClick={() =>
                setMobileDropdown(mobileDropdown === link.label ? null : link.label)
              }
              aria-expanded={mobileDropdown === link.label}
            >
              {link.label} <FiChevronDown style={{ marginLeft: 8, fontSize: 22 }} />
            </button>
            <div
              className={
                cls["mobile-dropdown"] +
                (mobileDropdown === link.label ? "" : " " + cls.closed)
              }
            >
              {link.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    cls["mobile-dropdown-link"] + (isActive ? " " + cls.active : "")
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              cls["mobile-nav-link"] + (isActive ? " " + cls.active : "")
            }
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </NavLink>
        )
      )}
    </nav>
  );

  return (
    <header
      className={
        cls.header +
        (scrolled ? " " + cls.scrolled : "") +
        (hidden ? " " + cls.hidden : "")
      }
    >
      <div className={cls["header-bg-texture"]} aria-hidden="true" />
      <div className={cls["header-inner"]}>
        <div className={cls["header-left-group"]}>
          {location.pathname !== "/" && (
            <button
              className={cls["mobile-back-button"]}
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <FiChevronLeft />
            </button>
          )}
          <Link to="/" className={cls["header-logo"]} aria-label="Waterfront Cafe home">
            <img src={logo} alt="Waterfront Cafe Bar Bistro" style={{ width: "100%" }} />
          </Link>
        </div>
        <h1 className={cls["header-heading"]}>Welcome to the Waterfront</h1>
        <div className={cls["header-nav"]}>
          {renderNav()}
        </div>
        <button
          className={cls.hamburger + (mobileOpen ? " " + cls.open : "")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {renderMobileNav()}
    </header>
  );
};

export default Header;
