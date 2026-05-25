import Button from "./Button";

const EventCard = ({ item }) => (
  <article className="event-card">
    <span>{item.date}</span>
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
    <Button to="/booking" variant="ghost">Book now</Button>
  </article>
);

export default EventCard;
