import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaBell } from 'react-icons/fa'; // Import a bell icon from react-icons

const Header = () => {
  const unreadNotifications = 3; // Example: You can set this dynamically from state

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>DigiAl</h1>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.homeLink}>Home</Link>
        <Link to="/login" className={styles.buttonLink}>Login</Link>
        
        {/* Voltage button for Register */}
        <Link to="/register" className={styles.voltageButton}>
          <button>Register</button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 234.6 61.3"
            preserveAspectRatio="none"
            xmlSpace="preserve"
          >
            <filter id="glow">
              <feGaussianBlur className={styles.blur} result="coloredBlur" stdDeviation="2"></feGaussianBlur>
              <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence"></feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace"></feDisplacementMap>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="displace"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <path
              className={styles.voltageLine1}
              d="M216.3 51.2c-3.7..."
              fill="transparent"
              stroke="#fff"
            ></path>
            <path
              className={styles.voltageLine2}
              d="M216.3 52.1c-3..."
              fill="transparent"
              stroke="#fff"
            ></path>
          </svg>
          <div className={styles.dots}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
            <div className={styles.dot4}></div>
            <div className={styles.dot5}></div>
          </div>
        </Link>

        {/* Notification Icon */}
        <div className={styles.notificationContainer}>
          <FaBell className={styles.notificationIcon} />
          {unreadNotifications > 0 && (
            <span className={styles.notificationBadge}>{unreadNotifications}</span>
          )}
        </div>
        
      </nav>
    </header>
  );
};

export default Header;