import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageBanner from "../components/layout/PageBanner";
import SEO from "../components/SEO";
import styles from "./BensonWildlife.module.css";

const heroImage = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80";
const landscapeImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";
const birdsImage = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80";
const conservationImage = "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80";
const gardenImage = "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80";

const sections = [
  {
    title: "A Landscape Rich in Natural Heritage",
    body:
      "Benson's history, deeply rooted from the medieval era to its significance in the English Civil War, sets a picturesque backdrop against which a diverse range of flora and fauna thrive. The village's natural habitats, from the River Thames to Ewelme Brook, create nurturing environments for various species. These include an array of plants, birds, butterflies, and insects such as bees, all playing crucial roles within our ecosystem.",
    image: landscapeImage,
    imageAlt: "River Thames landscape with lush riverside vegetation in Oxfordshire",
    layout: "text-first",
  },
  {
    title: "Birds, Butterflies & Pollinators",
    body:
      "Bird enthusiasts might delight in the knowledge that the area hosts a variety of avian species, contributing to the charm and biodiversity of our locale. Similarly, the butterfly populations, with their vivid patterns, add a splash of color to our gardens and public spaces. Insects, especially bees, are indispensable pollinators, supporting the growth of many plants and crops, thus ensuring the sustainability of our local agriculture and gardens.",
    image: birdsImage,
    imageAlt: "Birds, butterflies and pollinators in a natural riverside setting",
    layout: "image-first",
  },
  {
    title: "Protecting Benson's Natural Beauty",
    body:
      "The commitment to preserving and enhancing this natural heritage is shared by the Benson community, as evidenced by the efforts of the Benson Nature Group. Their work in monitoring, protecting, and educating about local wildlife and habitats is crucial. It reminds us of the importance of our roles as stewards of the environment.",
    image: conservationImage,
    imageAlt: "Community conservation scene with natural habitat and eco-focused care",
    layout: "text-first",
  },
  {
    title: "How You Can Help",
    body:
      "How can we, as locals and visitors, contribute positively to our environment and its inhabitants? Simple actions like maintaining wildlife-friendly gardens, participating in local conservation projects, and spreading awareness about the importance of biodiversity can have profound impacts. By fostering a community that respects and nurtures its natural surroundings, we ensure a healthier, more vibrant ecosystem for future generations.",
    image: gardenImage,
    imageAlt: "Nature-friendly garden and eco lifestyle in a tranquil countryside setting",
    layout: "image-first",
  },
];

const tags = ["#BensonWildlife", "#NatureConservation", "#CommunityBiodiversity"];

const BensonWildlife = () => (
  <main className={styles.pageShell}>
    <SEO
      title="Benson Wildlife"
      description="Explore Benson's riverside wildlife, conservation stories, and the natural beauty of Oxfordshire."
    />

    <PageBanner
      title="Benson Wildlife"
      eyebrow="Nature, Conservation & Riverside Beauty"
      text="Explore the rich biodiversity, riverside habitats, and thriving wildlife that make Benson one of Oxfordshire’s most beautiful natural environments."
      image={heroImage}
    />

    <section className={styles.introSection}>
      <Container className={styles.introContainer}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.introCard}
        >
          <p className={styles.introEyebrow}>Wildlife Along the Thames</p>
          <h2>Wildlife Along the Thames</h2>
          <p>
            Nestled by the serene waters in Benson, Oxfordshire, our community is blessed with a rich tapestry of nature and wildlife, weaving a vibrant ecosystem right at our doorstep.
          </p>
          <p>
            This local biodiversity, celebrated by the Benson Nature Group, plays a pivotal role in our environment, supporting a myriad of species that contribute to the ecological balance and the sheer beauty of our surroundings.
          </p>
        </motion.div>
      </Container>
    </section>

    <Container className={styles.storyContainer}>
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className={styles.storyBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={`${styles.storyLayout} ${section.layout === "image-first" ? styles.reverse : ""}`}>
            <div className={styles.storyCopy}>
              <p className={styles.sectionLabel}>0{index + 2}</p>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </div>

            <motion.div
              className={styles.storyImageWrap}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <img src={section.image} alt={section.imageAlt} className={styles.storyImage} />
            </motion.div>
          </div>
        </motion.section>
      ))}

      <motion.section
        className={styles.sectionFive}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className={styles.sectionLabel}>05</p>
        <h3>Join the Conservation Effort</h3>
        <p>
          Let's embrace our role in this dynamic ecosystem by supporting local initiatives aimed at nature conservation. Together, we can make a difference, ensuring that Benson remains a haven for wildlife and a beacon of natural beauty in Oxfordshire. Join us in celebrating and protecting the natural wonders that make our community so unique.
        </p>
      </motion.section>

      <motion.section
        className={styles.ctaCard}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className={styles.sectionLabel}>Benson Nature Group</p>
        <h3>Visit the Benson Nature Group</h3>
        <p>
          For more information on local wildlife and how you can get involved, visit the Benson Nature Group website.
        </p>
        <a
          href="https://www.bensonnaturegroup.com"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaButton}
        >
          Visit Website
        </a>
      </motion.section>

      <motion.section
        className={styles.socialCard}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className={styles.sectionLabel}>Community</p>
        <h3>Join the Conversation</h3>
        <p>Share your wildlife sightings and nature experiences across social media.</p>
        <div className={styles.tagRow}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tagPill}>{tag}</span>
          ))}
        </div>
      </motion.section>
    </Container>
  </main>
);

export default BensonWildlife;
