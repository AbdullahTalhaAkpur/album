import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'turn.js';
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

  // Initialize Turn.js for each album after rendering the albums
  useEffect(() => {
    albums.forEach((_, index) => {
      $(`#album-${index}`).turn({
        width: 400,
        height: 300,
        autoCenter: true,
      });
    });

    // Cleanup on unmount
    return () => {
      albums.forEach((_, index) => {
        $(`#album-${index}`).turn('destroy');
      });
    };
  }, [albums]);

  return (
    <div className={styles.albumContainer}>
      {albums.map((album, index) => (
        <div key={index} id={`album-${index}`} className={styles.album}>
          {/* Each album will have a flipping book-like effect */}
          <div className={styles.page}>
            <h2>{album.title}</h2>
            <img src={album.coverImage} alt={album.title} className={styles.coverImage} />
          </div>
          <div className={styles.page}>
            <div className={styles.photosGrid}>
              {album.photos.map((photo, idx) => (
                <img key={idx} src={photo} alt="" className={styles.photo} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;