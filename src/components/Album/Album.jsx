import React, { useState, useEffect } from 'react';
import styles from './Album.module.css';

const Album = () => {
  const [albums, setAlbums] = useState([]);

  // Fetch albums from the backend API when the component mounts
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:5000/albums'); // Assuming this is your API
        const data = await response.json();
        setAlbums(data); // Set the fetched albums data
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.albumContainer}>
      {albums.map((album, index) => (
        <div key={index} className={styles.album}>
          <h2>{album.title}</h2>
          <img src={album.coverImage} alt={album.title} className={styles.coverImage} />
          <div className={styles.photosGrid}>
            {album.photos.map((photo, idx) => (
              <img key={idx} src={photo} alt="" className={styles.photo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;