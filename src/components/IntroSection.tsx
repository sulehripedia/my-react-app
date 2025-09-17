import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <motion.div
      className="intro-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>
        Founded in 19XX, Daran Holding is a third-generation family enterprise
        with a rich legacy in real estate, construction, international trade,
        energy, and investments.
      </p>
      <div className="cta-group">
        <button className="cta-btn">Explore Our Story</button>
        <button className="cta-btn outline">Contact Us</button>
      </div>
    </motion.div>
  );
};

export default IntroSection;
