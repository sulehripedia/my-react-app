// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      // Scroll direction check
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
  
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${showHeader ? 'visible' : 'hidden'}`}>
    <div className="logo">
  <img
    src={scrolled ? '/assets/logo.svg' : '/assets/logo-dark.svg'}
    alt=""
    className="logo-img"
  />
</div>

        

        <nav className="nav-center">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/trading" className="nav-link">Our Projects</NavLink>
          <NavLink to="/projects" className="nav-link">About</NavLink>
          <NavLink to="/maritime" className="nav-link">Companies</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        <div className="drawer-toggle" onClick={toggleDrawer}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </header>

      {/* Drawer Menu */}
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        <div className="drawer" onClick={(e) => e.stopPropagation()}>
          <nav className="drawer-nav">
            <NavLink to="/" onClick={toggleDrawer}>Montfort Group</NavLink>
            <NavLink to="/trading" onClick={toggleDrawer}>Montfort Trading</NavLink>
            <NavLink to="/capital" onClick={toggleDrawer}>Montfort Capital</NavLink>
            <NavLink to="/maritime" onClick={toggleDrawer}>Montfort Maritime</NavLink>
            <NavLink to="/energy" onClick={toggleDrawer}>Fort Energy</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
