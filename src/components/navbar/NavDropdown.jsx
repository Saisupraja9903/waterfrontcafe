import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" aria-expanded={open}>
        {label}
        <FiChevronDown />
      </button>
      <div className={`nav-dropdown-panel ${open ? "is-open" : ""}`}>
        {items.map((item) => (
          <NavLink key={`${label}-${item.label}`} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
