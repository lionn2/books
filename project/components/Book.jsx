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
    const bookNameHTML = <span className="name">{this.props.book.get('name')}</span>;
    return (
      <article className="book">
        {this.props.isFullScreen
          ? <h3>{bookNameHTML}<hr/></h3>
          : <Link to={{pathname: `/books/${this.props.book.get('id')}`}}>{bookNameHTML}</Link>}
        {authors
          ? <div className="feature">
            <b><span>Authors:</span></b>
            <ul className="children">
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
          ? <div className="feature">
            <b><span>Genres:</span></b>
            <ul className="children">
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
          ? <div className="feature book-content">
            <b>Content:</b>
            <div>{content}</div>
          </div>
          : null}
      </article>
    );
  }
}