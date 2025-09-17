import { motion } from "framer-motion";


type Props = {
  sectorId: string;
  onClose: () => void;
};

const SectorPopup = ({ sectorId, onClose }: Props) => {
  return (
    <motion.div
      className="sector-popup"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      <div className="popup-header">
        <h2>{sectorId.replace("-", " ")}</h2>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="popup-content">
        <p>
          Content for <b>{sectorId}</b> will be added here.
        </p>
      </div>
    </motion.div>
  );
};

export default SectorPopup;
