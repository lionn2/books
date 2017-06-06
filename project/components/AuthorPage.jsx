import React from 'react';
import { connect } from 'react-redux';

import { authorSuccess, authorError, authorRequest } from '../actions/AuthorsActions'
import { getAuthorById } from '../data';
import Author from './Author';
import Menu from './Menu';

class AuthorPage extends React.Component {
  componentWillMount() {
    authorRequest();
    getAuthorById(this.authorId).then(authorSuccess, authorError);
  }
  render() {
    return (
      <div>
        <Menu/>
        {(this.props.message || !this.props.author)
        ? <div className="error">{this.props.message || `Author with id ${this.authorId} not found`}</div>
        : <Author author={this.props.author} isFullScreen={true}></Author>}
      </div>
    );
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