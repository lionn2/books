import React from 'react';
import { connect } from 'react-redux';

import { genreSuccess, genreError, genreRequest } from '../actions/GenreActions'
import { getGenreByName } from '../data';
import Genre from './Genre';

class GenrePage extends React.Component {
  componentWillMount() {
    genreRequest();
    getGenreByName(this.props.match.params.genre).then(genreSuccess, genreError);
  }
  render() {
    return (this.props.message || !this.props.genre)
      ? <div className="error">{this.props.message || `Genre ${this.props.match.params.genre} not found`}</div>
      : <Genre genre={this.props.genre}></Genre>;
  }
}

const mapStateToProps = function(store) {
  return {
    genre: store.genreState.get('genre'),
    message: store.genreState.get('message'),
  };
};

export default connect(mapStateToProps)(GenrePage);