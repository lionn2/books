import * as types from '../actions/ActionTypes';

let defaultState = [{
  name: 'Book1'
}, {
  name: 'Book2'
}, {
  name: 'Book3'
}];

export default function books(state = defaultState, {type, books}) {
  switch (type) {
    case types.BOOKS_REQUEST:
      break;
    case types.BOOKS_SUCCESS:
      return books;
    case types.BOOKS_ERROR:
      console.error('books error');
      break;
  }

  return state;
}
