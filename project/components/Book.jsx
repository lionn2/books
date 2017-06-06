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
      content: PropTypes.string,
    }),
  };

  render() {
    let authors = this.props.book.get('authors');
    let genres = this.props.book.get('genres');
    let content = this.props.book.get('content');
    const bookNameHTML = <span className="book-name">{this.props.book.get('name')}</span>;
    return (
      <div className="book">
        {this.props.isFullScreen
          ? <h3>{bookNameHTML}</h3>
          : <Link to={{pathname: `/books/${this.props.book.get('id')}`}}>{bookNameHTML}</Link>}
        {authors
          ? <div>
            <span>Authors:</span>
            <ul>
              {authors.map(author => {
                let id = author.get('id');
                return (
                  <Link to={{pathname: `/authors/${id}`}} key={id}><li className="book-author">
                    <span className="book-author-name">{author.get('name')}</span>
                  </li></Link>
                );
              })}
            </ul>
          </div>
          : null}

        {this.props.isFullScreen && genres
          ? <div>
            <span>Genres:</span>
            <ul>
              {genres.map((genre, iGenre) => {
                return (
                  <Link to={{pathname: `/genres/${genre}`}} key={iGenre}><li className="book-genre">
                    <span className="book-genre-name">{genre}</span>
                  </li></Link>
                );
              })}
            </ul>
          </div>
          : null}

        {this.props.isFullScreen && content
          ? <div className="book-content">
            Content:
            <div>{content}</div>
          </div>
          : null}
      </div>
    );
  }
}