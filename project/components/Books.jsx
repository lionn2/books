import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Books extends React.Component {
	static propTypes = {
		books: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
		})),
	};

	render() {
		return (
			<div className="books">
				<h3>Books</h3>
				<hr/>
        <ul>
				{this.props.books.map((book, i) => (
          <li className="book" key={i} >
            <span>Name: {book.name}</span>
          </li>
        ))}
        </ul>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
  return {
    books: store.booksState,
  };
};

export default connect(mapStateToProps)(Books);