// App.js
import React from 'react';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Album from './components/Album/Album';


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
    <div>
      <Header />
      <main>
        <Album
          title={album.title}
          coverImage={album.coverImage}
          photos={album.photos}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;