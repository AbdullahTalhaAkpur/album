import React from 'react';
import styles from './Photo.module.css';

const Photo = ({ src, alt }) => {
  return (
    <div className={styles.photoContainer}>
      <img src={src} alt={alt} className={styles.photo} />
    </div>
  );
};

export default Photo;