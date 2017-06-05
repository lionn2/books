import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import Book from './Book';

export default class Books extends React.Component {
	static propTypes = {
		books: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
	};

	render() {
		return (
			<div className="books">
        <ul>
				{this.props.books.map(book => {
          return <Book book={book} key={book.get('id')}></Book>;
        })}
        </ul>
			</div>
		);
	}
}
