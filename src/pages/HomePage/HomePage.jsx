import React, { useState, useEffect } from "react";
import { fetchAlbums, createAlbum, updateAlbum, deleteAlbum } from "../../services/api";
import Book from "../../components/Album/Book";
import './HomePage.module.css'

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState("");
  const [editAlbumId, setEditAlbumId] = useState(null);
  const [editAlbumTitle, setEditAlbumTitle] = useState("");
  const [collaborators, setCollaborators] = useState(""); // New state for adding friends
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetchAlbums()
      .then(albums => {
        console.log(albums); // Check if albums are correctly fetched
        setAlbums(albums);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load albums.");
        setLoading(false);
      });
  }, []);

// Improved create album function
const handleCreateAlbum = () => {
  if (newAlbum.trim()) {
    setLoading(true);
    createAlbum({ title: newAlbum, collaborators: collaborators.split(",").map(c => c.trim()) })
      .then((newAlbumData) => {
        setAlbums(prevAlbums => [...prevAlbums, newAlbumData]);
        setNewAlbum("");
        setCollaborators("");
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to create album. Please try again.");
      })
      .finally(() => setLoading(false));
  }
};

  // Improved update album function
  const handleUpdateAlbum = (id) => {
    if (editAlbumTitle.trim()) {
      setLoading(true);
      updateAlbum(id, { title: editAlbumTitle })
        .then((updatedAlbum) => {
          setAlbums(prevAlbums => prevAlbums.map((album) => (album._id === id ? updatedAlbum : album)));
          setEditAlbumId(null);
          setEditAlbumTitle("");
          setError(null);
        })
        .catch(err => {
          console.error(err);
          setError("Failed to update album. Please try again.");
        })
        .finally(() => setLoading(false));
    }
  };


   // Improved delete album function
   const handleDeleteAlbum = (id) => {
    if (window.confirm("Are you sure you want to delete this album?")) {
      setLoading(true);
      deleteAlbum(id)
        .then(() => {
          setAlbums(prevAlbums => prevAlbums.filter((album) => album._id !== id));
          setError(null);
        })
        .catch(err => {
          console.error(err);
          setError("Failed to delete album. Please try again.");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div>
      <Book />
      
      {/* Error Message */}
      {error && <div className="error">{error}</div>}
      
      {/* New Album Input */}
      <div className="home-container">
        <input
          type="text"
          placeholder="New Album Title"
          value={newAlbum}
          onChange={(e) => setNewAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add friends (comma separated)"
          value={collaborators}
          onChange={(e) => setCollaborators(e.target.value)}
        />
        <button onClick={handleCreateAlbum}>Create Album</button>
      </div>

      {/* Album List */}
      <div>
        {loading ? (
          <p>Loading albums...</p> // Show loading indicator
        ) : albums.length === 0 ? (
          <p>No albums available.</p> // No albums message
        ) : (
          albums.map((album) => (
            <div key={album._id}>
              {editAlbumId === album._id ? (
                <div>
                  <input
                    type="text"
                    value={editAlbumTitle}
                    onChange={(e) => setEditAlbumTitle(e.target.value)}
                  />
                  <button onClick={() => handleUpdateAlbum(album._id)}>Update</button>
                  <button onClick={() => setEditAlbumId(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <span>{album.title} by {album.creator}</span> {/* Display creator's name */}
                  <button
                    onClick={() => {
                      setEditAlbumId(album._id);
                      setEditAlbumTitle(album.title);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteAlbum(album._id)}>Delete</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;