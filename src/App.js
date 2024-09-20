import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/HomePage/HomePage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Album from './components/Album/Album';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Sidebar from './components/Shared/Sidebar';
import PhotoAlbum from './components/Photo/Photo';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const album = {
    title: 'Summer Vacation',
    coverImage: 'https://via.placeholder.com/600x400',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ 
          flexGrow: 1, 
          mr: sidebarOpen ? '240px' : '60px', 
          transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          width: '100%'
        }}>
          <Header />
          <PhotoAlbum/>
          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/" 
                element={<Album
                            title={album.title}
                            coverImage={album.coverImage}
                            photos={album.photos}
                         />} 
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </Box>
    </Router>
  );
}

export default App;