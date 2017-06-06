import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/books/">Books</Link>
        <Link to="/authors/">Authors</Link>
      </nav>
    );
  }
}