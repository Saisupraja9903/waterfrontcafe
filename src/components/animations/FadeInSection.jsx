import { motion } from "framer-motion";

const FadeInSection = ({ children, className = "" }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.65 }}
  >
    {children}
  </motion.section>
);

export default FadeInSection;
