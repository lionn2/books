import * as types from '../actions/ActionTypes';
import { fromJS, List, Map } from 'immutable';

const defaultState = Map({
  books: List(),
});

export default function books(state = defaultState, {type, books, message}) {
  switch (type) {
    case types.BOOKS_REQUEST:
      break;
    case types.BOOKS_SUCCESS:
      return state.set('books', fromJS(books));
    case types.BOOKS_ERROR:
      console.error(message);
      return state.set('message', message);
      break;
  }

  return state;
}
