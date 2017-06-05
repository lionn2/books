import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

export default class Author extends React.Component {
  static propTypes = {
    isFullScreen: PropTypes.bool,
    author: ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      biography: PropTypes.string,
      books: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })),
    }),
  };

  render() {
    let books = this.props.author.get('books');
    return (
      <div className="author">
        <Link to={{pathname: `/authors/${this.props.author.get('id')}`}}><span className="author-name">{this.props.author.get('name')}</span></Link>
        {this.props.isFullScreen && this.props.author.get('biography')
          ? <div className="author-biography">{this.props.author.get('biography')}</div>
          : null}
        {books
          ? <div>
            <span>Books:</span>
            <ul>
              {books.map(book => {
                let id = book.get('id');
                return (
                  <Link to={{pathname: `/books/${id}`}} key={id}><li className="author-book">
                    <span className="author-book-name">{book.get('name')}</span>
                  </li></Link>
                );
              })}
            </ul>
          </div>
          : null}
      </div>
    );
  }
}