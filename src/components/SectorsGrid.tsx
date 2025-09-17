import { motion } from "framer-motion";

type Props = {
  onSectorClick: (sectorId: string) => void;
};

const sectors = [
  { id: "real-estate", title: "Real Estate", desc: "Luxury development & investments." },
  { id: "construction", title: "Construction", desc: "EPC contracting & general contracting." },
  { id: "trading", title: "Trading", desc: "Global import–export bridging Iran & world markets." },
  { id: "marketing", title: "Marketing", desc: "OOH advertising & media studio." },
  { id: "investments", title: "Investments", desc: "Strategic holdings & capital markets." },
  { id: "energy", title: "Energy", desc: "Oil/gas and renewables." },
];

const SectorsGrid = ({ onSectorClick }: Props) => {
  return (
    <div className="sectors-wrapper">
      <h2>Our Sectors</h2>
      <div className="sector-grid">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.id}
            className="sector-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onSectorClick(sector.id)}
          >
            <h3>{sector.title}</h3>
            <p>{sector.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectorsGrid;
