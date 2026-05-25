
import { motion } from "framer-motion";
import styles from "../../pages/Gallery.module.css";

const GalleryCard = ({ src, onClick, index }) => (
  <motion.button
    className={styles.imageButton}
    onClick={onClick}
    aria-label={`Open gallery image ${index + 1}`}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.03, ease: "easeOut" }}
  >
    <img src={src} alt={`Waterfront Cafe gallery ${index + 1}`} loading="lazy" />
  </motion.button>
);

export default GalleryCard;
