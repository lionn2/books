import store from '../store';
import * as types from './ActionTypes';

export function booksSuccess(responseBooks) {
	let books = responseBooks.data;

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
export function booksError() {
	store.dispatch({
		type: types.BOOKS_ERROR,
	});
}
