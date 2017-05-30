import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Books from './components/Books';

export default (
  <Router>
    <Route>
      {/*<Redirect from="/" to="books" />*/}
      <Route exact path="/" component={Books}/>
    </Route>
  </Router>
);
