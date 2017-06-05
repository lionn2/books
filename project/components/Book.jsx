import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

export default class Book extends React.Component {
  static propTypes = {
    isFullScreen: PropTypes.bool,
    book: ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      authors: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })),
      genres: ImmutablePropTypes.listOf(PropTypes.string),
    }),
  };

  render() {
    let authors = this.props.book.get('authors');
    return (
      <div className="book">
        <Link to={{pathname: `/books/${this.props.book.get('id')}`}}><span className="book-name">{this.props.book.get('name')}</span></Link>
        {authors
          ? <div>
            <span>Authors:</span>
            <ul>
              {authors.map(author => {
                let id = author.get('id');
                return (
                  <Link to={{pathname: `/authors/${id}`}} key={id}><li className="book-author">
                    <span>Name: {author.get('name')}</span>
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