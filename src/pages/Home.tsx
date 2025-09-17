// src/pages/Home.tsx
import { useState } from "react";
import ScrollVideo from "../components/ScrollVideo";
import HeroText from "../components/HeroText";
import IntroSection from "../components/IntroSection";
import SectorsGrid from "../components/SectorsGrid";
import HeritageSection from "../components/HeritageSection";
import SectorPopup from "../components/SectorPopup";
const Home = () => {
  const [activeSector, setActiveSector] = useState<null | string>(null);

  return (
    <>
      <ScrollVideo />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero full-screen">
          <HeroText />
        </section>

        {/* Quick Intro */}
        <section className="intro full-screen">
          <IntroSection />
        </section>

        {/* Sectors Grid */}
        <section className="sectors full-screen">
          <SectorsGrid onSectorClick={setActiveSector} />
        </section>

        {/* Heritage Quote */}
        <section className="heritage full-screen">
          <HeritageSection />
        </section>
      </main>

      {/* Popup Drawer for Sector */}
      {activeSector && (
        <SectorPopup
          sectorId={activeSector}
          onClose={() => setActiveSector(null)}
        />
      )}
    </>
  );
};

export default Home;
