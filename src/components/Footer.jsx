import { contactDetails } from "../data/siteData";
import FooterLinks from "./footer/FooterLinks";
import FooterSocials from "./footer/FooterSocials";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className="footer">
    
    <div className="footer-content footer-responsive-layout">
      <div className="footer-col">
        <h4 style={{ color: "white", fontWeight: "bold" }}>Contact Us</h4>
        <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phone}</a>
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        <address>
          A4074 Benson Waterfront<br />
          Wallingford<br />
          Oxfordshire<br />
          OX10 6SJ
        </address>
        <a href="https://what3words.com/elders.genius.magnitude" target="_blank" rel="noreferrer" className="w3w-link">
          <span>&#47;&#47;&#47;</span>
          <strong>what3words</strong>
          <small>{contactDetails.what3words}</small>
        </a>
      </div>

      <div className="footer-col footer-col-center">
        <p><strong>Open Daily from 08:30AM to 19:00PM</strong></p>
        <p>Breakfast Menu Served Until 11:30AM</p>
        <p>Main Menu Served from 11:30AM</p>
        <p><strong>No booking required</strong></p>
        <FooterSocials />
      </div>

      <div className="footer-col footer-col-legal">
        <h4>Legal & Compliance</h4>
        <p>IVI Waterfronts Limited</p>
        <p>Company No. 10265263</p>
        <FooterLinks />
        <p>ICO Registration No. ZB293769</p>
        <p className={styles.copyright}>© 2024 The Waterfront Cafe. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
