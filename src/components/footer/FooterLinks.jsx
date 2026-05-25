import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links">
    <Link to="/benson-wildlife">Benson Wildlife</Link>
    <Link to="/cookie-policy">Cookie Policy</Link>
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/terms">Terms & Conditions</Link>
  </div>
);

export default FooterLinks;
