import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ item }) => (
  <article className="testimonial-card">
    <div className="stars">{Array.from({ length: item.rating }).map((_, index) => <FaStar key={index} />)}</div>
    <p>"{item.quote}"</p>
    <strong>{item.name}</strong>
  </article>
);

export default TestimonialCard;
