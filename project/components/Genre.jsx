import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Books from './Books';

export default class Genre extends React.Component {
  static propTypes = {
    genre: ImmutablePropTypes.contains({
      name: PropTypes.string.isRequired,
      books: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
    }),
  };

  render() {
    let books = this.props.genre.get('books');
    return (
      <div className="genre">
        <h3 className="genre-name">{this.props.genre.get('name')}</h3>
        {this.props.isFullScreen && this.props.genre.get('biography')
          ? <div className="genre-biography">{this.props.genre.get('biography')}</div>
          : null}
        {books
          ? <div>
            <span>Books:</span>
            <Books books={books}/>
          </div>
          : null}
      </div>
    );
  }
}