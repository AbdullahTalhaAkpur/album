import React, { useState, useEffect } from "react";
import Book from "../../components/Album/Book";
import { fetchAlbums, createAlbum, updateAlbum, deleteAlbum } from "../../services/api";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState("");
  const [editAlbumId, setEditAlbumId] = useState(null);
  const [editAlbumTitle, setEditAlbumTitle] = useState("");

  useEffect(() => {
    // Fetch albums on component mount
    fetchAlbums().then(setAlbums).catch(console.error);
  }, []);

  // Handle creating a new album
  const handleCreateAlbum = () => {
    if (newAlbum.trim()) {
      createAlbum({ title: newAlbum }).then(newAlbumData => {
        setAlbums([...albums, newAlbumData]);
        setNewAlbum("");
      }).catch(console.error);
    }
  };

  // Handle updating an existing album
  const handleUpdateAlbum = (id) => {
    if (editAlbumTitle.trim()) {
      updateAlbum(id, { title: editAlbumTitle }).then(updatedAlbum => {
        setAlbums(albums.map(album => album._id === id ? updatedAlbum : album));
        setEditAlbumId(null);
        setEditAlbumTitle("");
      }).catch(console.error);
    }
  };

  // Handle deleting an album
  const handleDeleteAlbum = (id) => {
    deleteAlbum(id).then(() => {
      setAlbums(albums.filter(album => album._id !== id));
    }).catch(console.error);
  };

  return (
    <div>
      <h1>Home Sayfası</h1>
      
      {/* New Album Input */}
      <div>
        <input
          type="text"
          placeholder="New Album Title"
          value={newAlbum}
          onChange={(e) => setNewAlbum(e.target.value)}
        />
        <button onClick={handleCreateAlbum}>Create Album</button>
      </div>

      {/* Album List with Edit and Delete */}
      <div>
        {albums.map(album => (
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
                <span>{album.title}</span>
                <button onClick={() => {
                  setEditAlbumId(album._id);
                  setEditAlbumTitle(album.title);
                }}>Edit</button>
                <button onClick={() => handleDeleteAlbum(album._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <Book /> {/* Display the book flip animation */}
    </div>
  );
};

export default Home;