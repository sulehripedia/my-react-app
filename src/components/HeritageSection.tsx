import { motion } from "framer-motion";


const HeritageSection = () => {
  return (
    <motion.div
      className="heritage-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <blockquote>
        “Our vision is not just growth, but continuity — a legacy carried through
        generations.”
      </blockquote>
      <div className="cta-group">
        <button className="cta-btn">Explore Our Story</button>
        <button className="cta-btn outline">Contact Us</button>
      </div>
    </motion.div>
  );
};

export default HeritageSection;
