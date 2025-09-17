import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Daran Holding</h1>
        <p>Three Generations of Excellence</p>
        <span className="tooltip">
          “Daran” derives from Persian, meaning to hold/possess.
        </span>
      </motion.div>
    </section>
  );
};

export default HeroText;
