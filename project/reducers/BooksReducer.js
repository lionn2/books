import * as types from '../actions/ActionTypes';
import { fromJS, List, Map } from 'immutable';

const defaultState = Map({
  books: List(),
});

export default function books(state = defaultState, action) {
  switch (action.type) {
    case types.BOOKS_REQUEST:
    case types.BOOK_REQUEST:
      break;
    case types.BOOKS_ERROR:
    case types.BOOK_ERROR:
      console.error(action.message);
      return state.set('message', action.message);
    case types.BOOKS_SUCCESS:
      return state.set('books', fromJS(action.books));
    case types.BOOK_SUCCESS:
      let books = state.get('books');
      let index = books.findIndex(b => b.get('id') == action.book.id);
      if (index >= 0) {
        return state.setIn(['books', index], fromJS(action.book));
      } else {
        let newBooks = books.push(fromJS(action.book));
        return state.set('books', newBooks);
      }
  }

  return state;
}
