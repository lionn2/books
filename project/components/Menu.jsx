import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          <Link to="/books/"><li>Books</li></Link>
          <Link to="/authors/"><li>Authors</li></Link>
        </ul>
      </nav>
    );
  }
}