import React, { useState, useEffect } from 'react';
import styles from './Album.module.css';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch albums from the backend API when the component mounts
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:5000/albums'); // API URL
        if (!response.ok) {
          throw new Error('Failed to fetch albums');
        }
        const data = await response.json();
        setAlbums(data); // Set the fetched albums data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.albumContainer}>
      {albums.map((album, index) => (
        <div key={index} className={styles.album}>
          {/* Albüm Başlığı */}
          <h2>{album.title}</h2>
          
          {/* Kapak Fotoğrafı */}
          <img
            src={album.coverImage}
            alt={album.title}
            className={styles.coverImage}
          />

          {/* Albüm Fotoğrafları */}
          <div className={styles.photosGrid}>
            {album.photos.map((photo, idx) => (
              <img key={idx} src={photo} alt={`Photo ${idx}`} className={styles.photo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;