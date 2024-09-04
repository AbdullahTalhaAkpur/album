// services/api.js
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${API_URL}/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

export const fetchPhotosByAlbum = async (albumId) => {
  try {
    const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching photos for album ${albumId}:`, error);
    throw error;
  }
};
