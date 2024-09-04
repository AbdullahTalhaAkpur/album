import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Album App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;