import store from '../store';
import * as types from './ActionTypes';

export function genreSuccess(genre) {
  store.dispatch({
    genre,
    type: types.GENRE_SUCCESS,
  });
}
export function genreRequest() {
  store.dispatch({
    type: types.GENRE_REQUEST,
  });
}
export function genreError(error) {
  store.dispatch({
    type: types.GENRE_ERROR,
    message: typeof error === 'object' ? error.message : error,
  });
}
