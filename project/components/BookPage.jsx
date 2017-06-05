import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { bookSuccess, bookError, bookRequest } from '../actions/BooksActions'
import { getBookById } from '../data';
import Book from './Book';

class BookPage extends React.Component {
  componentWillMount() {
    bookRequest();
    getBookById(this.bookId).then(bookSuccess, bookError);
  }
  render() {
    return (this.props.message || !this.props.book)
      ? <div className="erorr">{this.props.message || `Book with id ${this.bookId} not found`}</div>
      : <Book book={this.props.book} isFullScreen={true}></Book>;
  }

  get bookId() {
    return this.props.match.params.bookId;
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    book: store.booksState.get('books').find(book => book.get('id') == ownProps.match.params.bookId),
  };
};

export default connect(mapStateToProps)(BookPage);