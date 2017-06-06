import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import BooksPage from './components/BooksPage';
import BookPage from './components/BookPage';
import AuthorsPage from './components/AuthorsPage';
import AuthorPage from './components/AuthorPage';
import GenrePage from './components/GenrePage';

export default (
  <Router>
    <Route path="/">
      <Switch>
        <Redirect exact from='/' to='/books'/>
        <Route exact path='/books' component={BooksPage}/>
        <Route exact path="/books/:bookId" component={BookPage}/>
        <Route exact path="/authors" component={AuthorsPage}/>
        <Route exact path="/authors/:authorId" component={AuthorPage}/>
        <Route exact path="/genres/:genre" component={GenrePage}/>
      </Switch>
    </Route>
  </Router>
);
