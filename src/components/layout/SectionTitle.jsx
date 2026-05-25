const SectionTitle = ({ eyebrow, title, text, align = "center" }) => (
  <div className={`section-title ${align === "left" ? "align-left" : ""}`}>
    {eyebrow && <span>{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export default SectionTitle;
