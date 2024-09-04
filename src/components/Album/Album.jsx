import React from 'react';
import styles from './Album.module.css';

const Album = ({ title, coverImage, photos }) => {
  return (
    <div className={styles.albumContainer}>
      <h2>{title}</h2>
      <img src={coverImage} alt="" className={styles.coverImage} />
      <div className={styles.photosGrid}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="" className={styles.photo} />
        ))}
      </div>
    </div>
  );
};

export default Album;