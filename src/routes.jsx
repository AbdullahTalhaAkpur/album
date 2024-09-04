// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/album/:id" component={AlbumPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;