const MobileMenu = ({ children, open }) => <nav className={`mobile-nav ${open ? "is-open" : ""}`}>{children}</nav>;

export default MobileMenu;
