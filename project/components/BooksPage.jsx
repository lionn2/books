import React from 'react';
import { connect } from 'react-redux';

import Books from './Books';
import Menu from './Menu';
import { booksSuccess, booksError, booksRequest } from '../actions/BooksActions'
import { getBooks } from '../data';

class BooksPage extends React.Component {
  getBooks() {
    booksRequest();
    getBooks().then(booksSuccess, booksError);
  }

  componentWillMount() {
    this.getBooks();
  }

  render() {
    return (
      <div>
        <Menu/>
        <h3>Books<hr/></h3>
        <Books books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    books: store.booksState.get('books'),
    message: store.booksState.get('message'),
  };
};

export default connect(mapStateToProps)(BooksPage);