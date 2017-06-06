import React from 'react';
import { connect } from 'react-redux';

import Author from './Author';
import Menu from './Menu';
import { authorsSuccess, authorsError, authorsRequest } from '../actions/AuthorsActions'
import { getAuthors } from '../data';

class AuthorsPage extends React.Component {
  getAuthors() {
    authorsRequest();
    getAuthors().then(authorsSuccess, authorsError);
  }

  componentWillMount() {
    this.getAuthors();
  }

  render() {
    return (
      <div>
        <Menu/>
        <h3>Authors</h3>
        <hr/>
        <div className="authors">
          <ul>
            {this.props.authors.map(author => {
              return <Author author={author} key={author.get('id')}></Author>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    authors: store.authorsState.get('authors'),
    message: store.authorsState.get('message'),
  };
};

export default connect(mapStateToProps)(AuthorsPage);