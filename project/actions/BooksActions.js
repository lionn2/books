import store from '../store';
import * as types from './ActionTypes';

export function booksSuccess(books) {
	store.dispatch({
    books,
    type: types.BOOKS_SUCCESS,
	});
}
export function booksRequest() {
	store.dispatch({
		type: types.BOOKS_REQUEST,
	});
}
export function booksError(error) {
	store.dispatch({
		type: types.BOOKS_ERROR,
		message: typeof error === 'object' ? error.message : error,
	});
}

export function bookSuccess(book) {
  store.dispatch({
    book,
    type: types.BOOK_SUCCESS,
  });
}
export function bookRequest() {
  store.dispatch({
    type: types.BOOK_REQUEST,
  });
}
export function bookError(error) {
  store.dispatch({
    type: types.BOOK_ERROR,
    message: typeof error === 'object' ? error.message : error,
  });
}
