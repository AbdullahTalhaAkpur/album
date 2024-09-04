// App.js
import React from 'react';
import Routes from './routes';
import { AlbumProvider } from './context/AlbumContext';

const App = () => (
  <AlbumProvider>
    <Routes />
  </AlbumProvider>
);

export default App;