// services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch all albums
export const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${API_URL}/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

// Fetch photos by album
export const fetchPhotosByAlbum = async (albumId) => {
  try {
    const response = await axios.get(`${API_URL}/albums/${albumId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching photos for album ${albumId}:`, error);
    throw error;
  }
};

// Create a new album
export const createAlbum = async (albumData) => {
  try {
    const response = await axios.post(`${API_URL}/albums`, albumData);
    return response.data;
  } catch (error) {
    console.error('Error creating album:', error);
    throw error;
  }
};

// Update an existing album
export const updateAlbum = async (albumId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/albums/${albumId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating album ${albumId}:`, error);
    throw error;
  }
};

// Delete an album
export const deleteAlbum = async (albumId) => {
  try {
    await axios.delete(`${API_URL}/albums/${albumId}`);
  } catch (error) {
    console.error(`Error deleting album ${albumId}:`, error);
    throw error;
  }
};

// Add a new photo to an album
export const addPhotoToAlbum = async (albumId, photoData) => {
  try {
    const response = await axios.post(`${API_URL}/albums/${albumId}/photos`, photoData);
    return response.data;
  } catch (error) {
    console.error(`Error adding photo to album ${albumId}:`, error);
    throw error;
  }
};

// Update an existing photo in an album
export const updatePhotoInAlbum = async (albumId, photoId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/albums/${albumId}/photos/${photoId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating photo in album ${albumId}:`, error);
    throw error;
  }
};

// Delete a photo from an album
export const deletePhotoFromAlbum = async (albumId, photoId) => {
  try {
    await axios.delete(`${API_URL}/albums/${albumId}/photos/${photoId}`);
  } catch (error) {
    console.error(`Error deleting photo from album ${albumId}:`, error);
    throw error;
  }
};