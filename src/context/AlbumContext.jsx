// AlbumContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchAlbums } from '../services/api';

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlbums().then(data => {
      setAlbums(data);
      setLoading(false);
    });
  }, []);

  return (
    <AlbumContext.Provider value={{ albums, loading }}>
      {children}
    </AlbumContext.Provider>
  );
};