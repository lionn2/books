import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

export default class Books extends React.Component {
	static propTypes = {
		books: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			authors: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
			})),
			genres: ImmutablePropTypes.listOf(PropTypes.string),
		})),
	};

	render() {
		return (
			<div className="books">
        <ul>
				{this.props.books.map(book => {
				  let id = book.get('id');
				  let authors = book.get('authors');
          return (
            <li className="book" key={id}>
              <Link to={{pathname: `/books/${id}`}}><span className="book-name">{book.get('name')}</span></Link>
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
            </li>
          );
        })}
        </ul>
			</div>
		);
	}
}
