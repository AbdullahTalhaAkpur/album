const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./models/user')

const app = express();

// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Load MongoDB URI from .env

// Middleware
app.use(express.json());  // Parses incoming JSON requests
app.use(cors());  // Enables CORS for all routes
app.use('/backend/models', userRoutes);

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// API routes
const albumRoutes = require('./routes/albums');
app.use('/api/albums', albumRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});