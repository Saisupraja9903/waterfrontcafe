import React, { useState, useEffect } from "react";
import "./CookiesPopup.css";

const CookiesPopup = () => {
  const [visible, setVisible] = useState(false);


  // Always show popup on Home page load/refresh
  useEffect(() => {
    setVisible(true);
  }, []);


  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookies-popup">
      <div className="cookies-popup-content">
        <p>
          This website uses cookies to ensure you get the best experience. See our <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a> for more info.
        </p>
        <div className="cookies-popup-actions">
          <button className="accept-btn" onClick={handleAccept}>Accept Cookies</button>
          <button className="reject-btn" onClick={handleReject}>Reject Cookies</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
