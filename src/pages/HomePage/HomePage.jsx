import React, { useState, useEffect } from "react";
import Book from "../../components/Album/Book";
import { fetchAlbums, createAlbum, updateAlbum, deleteAlbum } from "../../services/api";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState("");
  const [editAlbumId, setEditAlbumId] = useState(null);
  const [editAlbumTitle, setEditAlbumTitle] = useState("");
  const [collaborators, setCollaborators] = useState(""); // New state for adding friends

  useEffect(() => {
    // Fetch albums on component mount
    fetchAlbums()
      .then(setAlbums)
      .catch(console.error);
  }, []);

  // Handle creating a new album
  const handleCreateAlbum = () => {
    if (newAlbum.trim()) {
      createAlbum({ title: newAlbum, collaborators: collaborators.split(",") }) // Add collaborators field
        .then((newAlbumData) => {
          setAlbums([...albums, newAlbumData]);
          setNewAlbum("");
          setCollaborators("");
        })
        .catch(console.error);
    }
  };

  // Handle updating an existing album
  const handleUpdateAlbum = (id) => {
    if (editAlbumTitle.trim()) {
      updateAlbum(id, { title: editAlbumTitle })
        .then((updatedAlbum) => {
          setAlbums(albums.map((album) => (album._id === id ? updatedAlbum : album)));
          setEditAlbumId(null);
          setEditAlbumTitle("");
        })
        .catch(console.error);
    }
  };

  // Handle deleting an album
  const handleDeleteAlbum = (id) => {
    deleteAlbum(id)
      .then(() => {
        setAlbums(albums.filter((album) => album._id !== id));
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Ana Sayfa</h1>

      {/* New Album Input */}
      <div>
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

      {/* Album List with Edit and Delete */}
      <div>
        {albums.map((album) => (
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
        ))}
      </div>

      {/* Display the book flip animation */}
      <Book albums={albums} /> {/* Pass albums to Book component */}
    </div>
  );
};

export default Home;