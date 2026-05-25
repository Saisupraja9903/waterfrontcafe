
import SEO from "../components/SEO";
import about1 from "../assets/about4.avif";
import about2 from "../assets/about1.avif";
import about3 from "../assets/about3.avif";
import about4 from "../assets/about2.avif";
import styles from "./AboutUs.module.css";

const aboutSections = [
  {
    heading: "An Oasis within An Oasis",
    text: [
      "Waterfront Café is an independent eatery with a casual vibe serving simple, uncomplicated food on the banks of the River Thames in Benson, South Oxfordshire.",
      "Open for breakfast through to supper and everything in between – our counter is bursting with freshly baked pastries, homemade cakes, and light snacks.",
      "The setting is second to none; we're just a stone's throw from the River Thames which makes for the perfect spot to soak up the sunset with a bite to eat and a glass of wine.",
      "Have young kids? Make a day of it – grab a box of duck food and discover the riverside, including the paddling pool next door.",
      "Make it a takeaway if you prefer and we’re here for ice cream when you need us!",
      "We don’t take bookings; turn up and we’ll find you a table."
    ],
    image: about1,
    imageAlt: "Waterfront Cafe outdoor decking by the river",
    reverse: false,
  },
  {
    text: [
      "Locals will remember the Waterfront Café starting as a small café and shop serving holidaymakers and boaters with souvenirs and grocery essentials.",
      "It’s changed a lot over time and is almost unrecognisable; with a decking area that keeps on growing every year and, more recently, outside heaters, and retractable roofs.",
      "Waterfront Café the place for families, business people, friends, couples, gatherings, walkers, cyclists, and passers-by.",
      "Whether you want to enjoy our menu for any time of day or looking to celebrate an occasion, the Waterfront Café and its team are here to serve you.",
      "Everyone is welcome, all year round."
    ],
    image: about2,
    imageAlt: "River Thames view near Benson",
    reverse: true,
  },
  {
    text: [
      "As an independent business, we’re keen to support local suppliers and source seasonal products for our chefs to freshly prepare on our premises and we like to know where our produce comes from.",
      "Our meat is supplied by local butcher Carl Woods in Sonning Common, we have beer from Loddon Brewery in Dunsden, sourdough bread from Cornfield bakeries, Red Dog Cider from Benson, and eggs from Beechwood Farm among others.",
      "Food is simple, honest, and uncomplicated. Our mouth-watering sourdough breakfast rolls are a favourite way to start the day, homemade beer-battered fish and chips and burgers deserve a mention and our colourful salads don’t disappoint.",
      "Our homemade cakes (including gluten-free and vegan options), show-stopping brownies, and giant scones are the perfect accompaniment to our locally roasted coffee, and the NEW ice cream bar is fully stocked and ready for the summer season!"
    ],
    image: about3,
    imageAlt: "Fresh fish dish served at Waterfront Cafe",
    reverse: false,
  },
  {
    text: [
      "Positioned on the banks at Benson with views of the lock we are a riverside location.",
      "Enjoy the beautiful view from our vast outside decking area during the summer months and continue the alfresco experience under the covered heated areas on cooler days.",
      "Large tables are perfect for family gatherings and the comfortable lounge area is the perfect spot to enjoy sunset drinks and lazy lunches.",
      "The enclosed glass veranda offers the ‘bringing the outside in’ feeling all year round.",
      "The decking and covered outside areas are also dog-friendly."
    ],
    image: about4,
    imageAlt: "Aerial view of Waterfront Cafe",
    reverse: true,
  },
];

const AboutUs = () => (
  <main className={styles.aboutUsRoot}>
    <SEO title="About Us" description="Learn about Waterfront Cafe, a relaxed cafe, bar and bistro on the River Thames in Benson." />
    {aboutSections.map((section, idx) => (
      <section
        key={idx}
        className={
          styles.section + (section.reverse ? ' ' + styles.reverse : '')
        }
      >
        <div className={styles.textCol}>
          {section.heading && (
            <h2 className={styles.heading}>{section.heading}</h2>
          )}
          {section.text.map((t, i) => (
            <p className={styles.text} key={i}>{t}</p>
          ))}
        </div>
        <div className={styles.imageCol}>
          <img
            src={section.image}
            alt={section.imageAlt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </section>
    ))}
  </main>
);

export default AboutUs;
