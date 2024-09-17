import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Album from './components/Album/Album';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
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
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/src/pages/HomePage/HomePage.jsx' element={<Home />} />
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;