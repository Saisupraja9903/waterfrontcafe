import { FaInstagram, FaFacebook, FaTripadvisor, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
  <svg
    viewBox="0 0 1440 160"
    preserveAspectRatio="none"
  >

    {/* LIGHT TOP CURVE */}
    <path
      d="
        M0,110
        C180,40 360,40 540,95
        C720,150 900,150 1080,95
        C1260,40 1350,40 1440,90
        L1440,0
        L0,0
        Z
      "
      fill="rgba(120,170,190,0.45)"
    />

    {/* DARK FRONT CURVE */}
    <path
      d="
        M0,125
        C220,60 420,60 620,120
        C820,175 1020,175 1220,120
        C1340,85 1400,85 1440,105
        L1440,160
        L0,160
        Z
      "
      fill="#004b63"
    />

  </svg>
</div>

      <div className="footer-content">

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><a href="tel:+441491833732">+44 (0) 1491 833 732</a></p>
          <p><a href="mailto:info@waterfrontcafe.co.uk">info@waterfrontcafe.co.uk</a></p>
          <address>
            A4074 Benson Waterfront<br />
            Wallingford<br />
            Oxfordshire<br />
            OX10 6SJ
          </address>
          <a href="https://what3words.com/elders.genius.magnitude" target="_blank" rel="noreferrer" className="w3w-link">
            <span className="w3w-logo">///</span> elders.genius.magnitude
          </a>
        </div>

        <div className="footer-col footer-col-center">
          <p><strong>Open Daily from 08:30 AM to 19:00 PM</strong></p>
          <p>Breakfast Menu Served Until 11:30 AM</p>
          <p>Main Menu Served from 11:30 AM</p>
          <p><strong>No booking required</strong></p>
          <div className="social-links">
            <a href="https://www.instagram.com/waterfrontcafebenson/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={32} />
            </a>
            <a href="https://www.facebook.com/waterfrontcafebenson/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.tripadvisor.co.uk/" target="_blank" rel="noreferrer" aria-label="TripAdvisor">
              <FaTripadvisor size={32} />
            </a>
            <a href="https://maps.app.goo.gl/aJoNByyxGcF85AkN7" target="_blank" rel="noreferrer" aria-label="Google Reviews">
              <FaGoogle size={32} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Legal & Compliance</h4>
          <p>IVI Waterfronts Limited</p>
          <p>Company No. 10265263</p>
          <a href="https://www.iubenda.com/privacy-policy/70272736/cookie-policy" target="_blank" rel="noreferrer">Cookie Notice</a>
          <a href="https://www.iubenda.com/privacy-policy/70272736" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://www.iubenda.com/terms-and-conditions/70272736" target="_blank" rel="noreferrer">Website Terms of Use</a>
          <p>ICO Registration No. ZB293769</p>
          <p className="copyright">© 2024 The Waterfront Café. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;