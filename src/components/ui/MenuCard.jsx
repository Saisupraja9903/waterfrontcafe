const MenuCard = ({ item }) => (
  <article className="menu-card">
    <div>
      {item.tag && <span className="menu-tag">{item.tag}</span>}
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
    <strong>{item.price}</strong>
  </article>
);

export default MenuCard;
