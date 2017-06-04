import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import BooksPage from './components/BooksPage';

export default (
  <Router>
    <Route>
      {/*<Redirect from="/" to="books" />*/}
      <Route exact path="/" component={BooksPage}/>
    </Route>
  </Router>
);
