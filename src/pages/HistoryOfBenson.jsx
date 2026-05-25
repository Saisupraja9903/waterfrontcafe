import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageBanner from "../components/layout/PageBanner";
import SEO from "../components/SEO";
import styles from "./HistoryOfBenson.module.css";

const heroImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
const rootsImage = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80";
const rafImage = "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80";
const todayImage = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";

const sectionData = [
  {
    title: "The Historical Roots of Benson",
    body: [
      "Benson's origins trace back to ancient times, with its name believed to derive from Bensington, indicating its long-standing significance in the English landscape.",
      "Recorded in the Domesday Book of 1086 as a substantial royal manor, Benson has been a site of continuous human activity and strategic importance throughout the centuries.",
      "The village played notable roles during pivotal moments in English history, including the Civil War, where it was reputedly the last Royalist stronghold to surrender due to its proximity to Royalist cities like Oxford and Newbury.",
      "The presence of a flash lock on the Thames at Benson since 1746, and the establishment of Benson pound lock in 1788, underscore the village's historical importance in river navigation and trade."
    ],
    image: rootsImage,
    imageAlt: "Riverside view of Benson and the Thames",
    layout: "text-first",
    muted: false,
  },
  {
    title: "RAF Benson: A Pillar of British Aviation",
    body: [
      "RAF Benson, established in 1939, quickly became a crucial part of Britain's defense infrastructure during World War II. The base played a significant role in the war effort, housing operations crucial to the RAF's reconnaissance and transport capabilities.",
      "The airfield's strategic importance was underscored during the war when it became a target for German air raids, prompted by a broadcast by the infamous propaganda broadcaster, William Joyce (Lord Haw Haw), who mentioned an airfield near a village with a clock that had two elevens—a reference to the clock on the tower of Benson's St Helen's parish church.",
      "Post-war, RAF Benson evolved with the changing needs of the RAF, continuing to serve as a key operational base. It has been involved in various capacities, including serving as a training center, hosting transport squadrons, and playing roles in modern military operations and humanitarian efforts.",
      "The base's significance extends beyond military operations, contributing to the local economy and community through employment opportunities and community engagement activities."
    ],
    image: rafImage,
    imageAlt: "RAF aircraft and historic aviation heritage near Benson",
    layout: "image-first",
    muted: true,
  },
  {
    title: "RAF Benson and Benson Village Today",
    body: [
      "Today, RAF Benson stands as a testament to the enduring legacy of the RAF's role in British and global aviation history. The base continues to be an integral part of national defense and international peacekeeping efforts.",
      "Meanwhile, Benson village, with its historical charm and scenic beauty, attracts visitors keen to explore its heritage, natural landscapes, and the tranquil Thames waterside.",
      "The relationship between RAF Benson and the village of Benson is a prime example of how military and civilian communities can coexist harmoniously, contributing to each other's vitality and resilience.",
      "RAF Benson's presence has indelibly shaped the character of the village, adding a unique dimension to its historical narrative and community life.",
      "Visitors to Benson can enjoy a blend of historical exploration and natural beauty, from walking along the Thames Path to discovering architectural and historical gems scattered throughout the village.",
      "The rich history of Benson and the ongoing story of RAF Benson offer a fascinating glimpse into the past and present, highlighting the village's unique place in Britain's heartland.",
      "For those intrigued by the blend of history, aviation, and picturesque landscapes, Benson presents a compelling destination. Its storied past, coupled with the vibrancy of present-day community life, makes Benson a remarkable testament to the enduring spirit of both its people and their achievements through the ages."
    ],
    image: todayImage,
    imageAlt: "Contemporary riverside and countryside views around Benson",
    layout: "text-first",
    muted: false,
  },
];

const HistoryOfBenson = () => (
  <main className={styles.pageShell}>
    <SEO
      title="The History of Benson"
      description="Discover the heritage of Benson village, the River Thames and the legacy of RAF Benson."
    />

    <PageBanner
      title="The History of Benson"
      eyebrow="Riverside heritage & aviation history"
      text="Discover the rich story of Benson village, the River Thames, and the enduring legacy of RAF Benson."
      image={heroImage}
    />

    <section className={styles.introSection}>
      <Container className={styles.introContainer}>
        <motion.div
          className={styles.introCard}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className={styles.introEyebrow}>A heritage story in the heart of Oxfordshire</p>
          <h2>The History of Benson</h2>
          <p>
            Benson is a picturesque village nestled along the banks of the River Thames in Oxfordshire, boasting a rich tapestry of history intertwined with the evolution of its notable RAF base.
          </p>
          <p>
            This article delves into the historical significance of Benson and the pivotal role RAF Benson plays in the region, offering insights for both locals and visitors drawn to its unique heritage.
          </p>
        </motion.div>
      </Container>
    </section>

    <Container className={styles.storyContainer}>
      {sectionData.map((section, index) => (
        <motion.section
          key={section.title}
          className={`${styles.storyBlock} ${section.muted ? styles.mutedBlock : ""}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={`${styles.storyLayout} ${section.layout === "image-first" ? styles.reverse : ""}`}>
            <div className={styles.storyCopy}>
              <p className={styles.sectionLabel}>0{index + 2}</p>
              <h3>{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
    </Container>
  </main>
);

export default HistoryOfBenson;
