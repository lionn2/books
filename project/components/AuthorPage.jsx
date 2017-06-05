import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authorSuccess, authorError, authorRequest } from '../actions/AuthorsActions'
import { getAuthorById } from '../data';
import Author from './Author';

class AuthorPage extends React.Component {
  componentWillMount() {
    authorRequest();
    getAuthorById(this.authorId).then(authorSuccess, authorError);
  }
  render() {
    return (this.props.message || !this.props.author)
      ? <div className="erorr">{this.props.message || `Author with id ${this.authorId} not found`}</div>
      : <Author author={this.props.author} isFullScreen={true}></Author>;
  }

  get authorId() {
    return this.props.match.params.authorId;
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    author: store.authorsState.get('authors').find(author => author.get('id') == ownProps.match.params.authorId),
  };
};

export default connect(mapStateToProps)(AuthorPage);