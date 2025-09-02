// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <ul className="footer-links">
            <li>Montfort Group</li>
            <li>Montfort Trading</li>
            <li>Company Projects</li>
            <li>Company Value</li>
            <li>Fort Energy</li>
          </ul>

          <ul className="footer-secondary">
            <li>Contact</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-center">
          <div className="footer-office">
            <h4>Iran</h4>
            <p>3rd & 4th floor<br />
              Rue du Mont-Blanc 14<br />
              1201 Geneva, Switzerland</p>
            <p>P : +41 227415900<br />
              gva.reception@mont-fort.com</p>
          </div>

          <div className="footer-office">
            <h4>USA</h4>
            <p>1104 ICD Brookfield Place<br />
              Dubai International Financial Centre<br />
              Dubai, United Arab Emirates</p>
            <p>P : +971 45914032<br />
              uae.reception@mont-fort.com</p>
          </div>

          <div className="footer-office">
            <h4>United K</h4>
            <p>0804 Marina One East Tower<br />
              7 Straits View<br />
              018936, Singapore</p>
            <p>P : +65 62286490<br />
              sing.reception@mont-fort.com</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/assets/logo-color-b.png" alt="Montfort Logo" />
        </div>
        <div className="footer-copy">
          © 2021 | Sepramin – All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
