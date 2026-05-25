const ContactCard = ({ icon, title, children }) => (
  <article className="contact-card">
    <div className="contact-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{children}</p>
  </article>
);

export default ContactCard;
