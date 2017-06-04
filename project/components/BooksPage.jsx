import React from 'react';
import { connect } from 'react-redux';

import Books from './Books';
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
        <h3>Books</h3>
        <hr/>
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