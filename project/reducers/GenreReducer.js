import * as types from '../actions/ActionTypes';
import { fromJS, Map } from 'immutable';

const defaultState = Map({
});

export default function genre(state = defaultState, action) {
  switch (action.type) {
    case types.GENRE_REQUEST:
      break;
    case types.GENRE_ERROR:
      console.error(action.message);
      return state.set('message', action.message);
    case types.GENRE_SUCCESS:
      return state.set('genre', fromJS(action.genre)).delete('message');
  }

  return state;
}
