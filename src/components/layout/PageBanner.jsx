import { motion } from "framer-motion";

const PageBanner = ({ title, eyebrow, text, image }) => (
  <section className="page-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 50, 67, .64), rgba(0, 50, 67, .54)), url(${image})` }}>
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      {eyebrow && <span>{eyebrow}</span>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </motion.div>
  </section>
);

export default PageBanner;
