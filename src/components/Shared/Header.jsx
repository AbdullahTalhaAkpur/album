import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>DigiAl</h1>
      </div>
      {isMobile ? (
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      ) : null}
      <nav className={`${styles.nav} ${isMobile && isMenuOpen ? styles.mobileNav : ''}`}>
        <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link to="/login" className={`${styles.navLink} ${location.pathname === '/login' ? styles.active : ''}`}>Login</Link>
        <Link to="/register" className={`${styles.voltageButton} ${location.pathname === '/register' ? styles.active : ''}`}>
          {/* Existing voltage button code */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;