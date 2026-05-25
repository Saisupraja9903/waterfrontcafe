import Button from "./Button";

const FoodCard = ({ image, title, text, to }) => (
  <article className="food-card">
    <img src={image} alt="" loading="lazy" />
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button to={to} variant="ghost">View menu</Button>
    </div>
  </article>
);

export default FoodCard;
