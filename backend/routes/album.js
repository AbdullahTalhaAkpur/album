const express = require('express');
const router = express.Router();
const Album = require('../routes/album');


// Create a new album
router.post('/', async (req, res) => {
  const album = new Album({
    title: req.body.title,
    coverImage: req.body.coverImage,
    photos: req.body.photos
  });

  try {
    const newAlbum = await album.save();
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all albums
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single album
router.get('/:id', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an album
router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) return res.status(404).json({ message: 'Album not found' });
    res.json({ message: 'Album deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;