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
        <h3 className="name">{this.props.genre.get('name')}<hr/></h3>
        {books
          ? <div className="feature">
            <b><span>Books:</span></b>
            <Books books={books}/>
          </div>
          : null}
      </div>
    );
  }
}