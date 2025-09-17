// src/components/TabsSection.tsx
import React, { useState } from 'react';
import './TabsSection.css';

const TabsSection: React.FC = () => {
  const tabs = ['Our Value', 'Our Vision', 'Our Mission'];
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <p>
Sapramin aims at creating value through tailor-made, innovative and sophisticated technical 
engineering and financial solutions. We want to resolve the challenging
 problems associated with the structuring and implementing of high-quality, 
 large-scale programs for developing countries.          </p>
        );
      case 1:
        return (
          <p>
            Our mission is to empower global trade by offering reliable, efficient, and sustainable
            energy and commodity solutions while building long-term value.
          </p>
        );
      case 2:
        return (
          <p>
            Our strengths lie in our diversified expertise, global partnerships, and a unified
            vision that drives innovation across trading, capital, and logistics sectors.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-section">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabsSection;
