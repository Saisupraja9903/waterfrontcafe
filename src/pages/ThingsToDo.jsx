import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageBanner from "../components/layout/PageBanner";
import SEO from "../components/SEO";
import styles from "./ThingsToDo.module.css";

const heroImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
const thamesImage = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";
const rafImage = "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80";
const churchImage = "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80";
const wildlifeImage = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";
const lockImage = "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80";
const civilWarImage = "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1200&q=80";
const cafeImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

const sections = [
  {
    title: "Stroll Along the Thames Path",
    body:
      "Begin your adventure with a stroll along the Thames Path. This national trail offers stunning views of the river and leads you through some of the most scenic landscapes in the area. It's the perfect way to immerse yourself in the natural beauty of Benson and the surrounding countryside.",
    image: thamesImage,
    layout: "text-first",
    alt: "Riverside walking path beside the River Thames",
  },
  {
    title: "Explore the Historic RAF Benson",
    body:
      "Dive into the rich history of RAF Benson by exploring this active Royal Air Force station. While direct public access may be limited, the base's significance during World War II and its ongoing role in national defense add a fascinating historical layer to your visit to Benson.",
    image: rafImage,
    layout: "image-first",
    alt: "Historic aviation imagery at RAF Benson",
  },
  {
    title: "Visit St. Helen's Church",
    body:
      "Step back in time at St. Helen's Church, a historical gem dating back centuries. The church's architecture and serene churchyard offer a peaceful retreat and a glimpse into Benson's medieval past.",
    image: churchImage,
    layout: "text-first",
    alt: "Historic English church architecture in Benson",
  },
  {
    title: "Discover Local Wildlife",
    body:
      "For those interested in wildlife and conservation, the Benson Nature Group provides insights into the local ecosystem. Learn about the variety of species that call this area home and the group's efforts to preserve Benson's natural heritage.",
    image: wildlifeImage,
    layout: "image-first",
    alt: "Wildlife and riverside nature scene in Oxfordshire",
  },
  {
    title: "Relax at Benson Lock and Weir",
    body:
      "Take a moment to unwind by the Benson Lock and Weir, a key feature of the Thames and a lovely spot for picnics, photography, or simply watching the boats pass by. The lock is a testament to the historical importance of river navigation in the region.",
    image: lockImage,
    layout: "text-first",
    alt: "Benson Lock and river boats on the Thames",
  },
  {
    title: "Uncover Benson's Civil War History",
    body:
      "Benson's strategic location meant it played a role in the English Civil War. While here, delve into the village's history during this tumultuous period and imagine the dramatic events that once unfolded in these peaceful surroundings.",
    image: civilWarImage,
    layout: "image-first",
    alt: "Historic village streets and heritage imagery in Benson",
  },
  {
    title: "Indulge at the Waterfront Café",
    body:
      "After exploring Benson's sights, there's no better way to conclude your visit than with a meal at the Waterfront Café. Boasting a prime location by the waterfront, our café offers a selection of delicious, locally sourced dishes. Whether you're in the mood for a hearty breakfast, a leisurely lunch, or a relaxing dinner with views of the Thames, the Waterfront Café provides a warm welcome and a memorable dining experience.",
    image: cafeImage,
    layout: "feature",
    alt: "Waterfront Café riverside dining scene",
  },
];

const ThingsToDo = () => (
  <main className={styles.pageShell}>
    <SEO
      title="Things To Do"
      description="Discover the best things to do in Benson, from riverside walks to RAF heritage and dining at the Waterfront Café."
    />

    <PageBanner
      title="Things To Do"
      eyebrow="Explore Benson & the River Thames"
      text="Discover riverside walks, historic landmarks, aviation heritage, and unforgettable dining experiences in the heart of Oxfordshire."
      image={heroImage}
    />

    <section className={styles.introSection}>
      <Container className={styles.introContainer}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.introCard}
        >
          <p className={styles.introEyebrow}>Discover Benson, Oxon</p>
          <h2>Discover Benson, Oxon</h2>
          <p>
            Nestled by the tranquil waters of the Thames in Oxfordshire, Benson is a picturesque village rich in history and natural beauty.
          </p>
          <p>
            Whether you're a history buff, a nature lover, or simply in search of a peaceful retreat, Benson has something to offer. Here's a curated list of must-see attractions and activities in Benson, where you can start or end your day, or even both in a dining experience at the Waterfront Café, a charming spot by the waterfront that promises to enrich your visit.
          </p>
        </motion.div>
      </Container>
    </section>

    <Container className={styles.contentContainer}>
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className={`${styles.storyBlock} ${section.layout === "feature" ? styles.featureBlock : ""}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {section.layout === "feature" ? (
            <div className={styles.featureGrid}>
              <div>
                <p className={styles.sectionLabel}>0{index + 2}</p>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
              <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.35 }}>
                <img src={section.image} alt={section.alt} className={styles.featureImage} />
              </motion.div>
            </div>
          ) : (
            <div className={`${styles.storyLayout} ${section.layout === "image-first" ? styles.reverse : ""}`}>
              <div className={styles.storyCopy}>
                <p className={styles.sectionLabel}>0{index + 2}</p>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
              <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.35 }}>
                <img src={section.image} alt={section.alt} className={styles.storyImage} />
              </motion.div>
            </div>
          )}
        </motion.section>
      ))}
    </Container>

    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <p className={styles.ctaEyebrow}>Plan your visit</p>
        <h2>Plan your visit to Benson today.</h2>
        <p>
          Whether you're seeking adventure, relaxation, or exceptional dining, Waterfront Café offers an unforgettable riverside experience.
        </p>
        <a href="/menu" className={styles.ctaButton}>View Menus</a>
      </div>
    </section>
  </main>
);

export default ThingsToDo;
