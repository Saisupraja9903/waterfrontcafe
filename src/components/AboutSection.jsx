import bghome from "../assets/bghome.jpg";
import Button from "./ui/Button";
import SectionTitle from "./layout/SectionTitle";

const AboutSection = () => (
  <section className="about-section" id="welcome">
    <div className="about-copy">
      <SectionTitle
        eyebrow="On the River Thames"
        title="Discover the charming Waterfront Cafe in Benson"
        text="Homemade specials, generous breakfasts, relaxed lunches, cakes made fresh daily and a deck made for watching the river drift by."
      />
      <p>
        Little ones are welcomed with a varied children's menu, dogs are part of the family, and the Ben & Jerry's counter keeps the sweeter moments close at hand.
      </p>
      <Button to="/about-us">Read more</Button>
    </div>
    <div className="about-image">
      <img src={bghome} alt="Waterfront Cafe food and riverside atmosphere" loading="lazy" />
    </div>
  </section>
);

export default AboutSection;
