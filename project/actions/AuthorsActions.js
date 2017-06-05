import store from '../store';
import * as types from './ActionTypes';

export function authorsSuccess(authors) {
  store.dispatch({
    authors,
    type: types.AUTHORS_SUCCESS,
  });
}
export function authorsRequest() {
  store.dispatch({
    type: types.AUTHORS_REQUEST,
  });
}
export function authorsError(error) {
  store.dispatch({
    type: types.AUTHORS_ERROR,
    message: typeof error === 'object' ? error.message : error,
  });
}

export function authorSuccess(author) {
  store.dispatch({
    author,
    type: types.AUTHOR_SUCCESS,
  });
}
export function authorRequest() {
  store.dispatch({
    type: types.AUTHOR_REQUEST,
  });
}
export function authorError(error) {
  store.dispatch({
    type: types.AUTHOR_ERROR,
    message: typeof error === 'object' ? error.message : error,
  });
}
