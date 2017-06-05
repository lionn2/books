import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import BookPage from './components/BookPage';

export default (
  <Router>
    <Route path="/">
      <Switch>
        <Redirect exact from='/' to='/books'/>
        <Route exact path='/books' component={BooksPage}/>
        <Route exact path="/books/:bookId" component={BookPage}/>
      </Switch>
    </Route>
  </Router>
);
