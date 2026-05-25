import { hours } from "../data/siteData";

const HoursBanner = () => (
  <section className="hours-banner">
    {hours.map((item) => (
      <article key={item.label}>
        <span>{item.label}</span>
        <strong>{item.value}</strong>
      </article>
    ))}
  </section>
);

export default HoursBanner;
