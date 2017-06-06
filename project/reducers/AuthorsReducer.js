import * as types from '../actions/ActionTypes';
import { fromJS, List, Map } from 'immutable';

const defaultState = Map({
  authors: List(),
});

export default function authors(state = defaultState, action) {
  switch (action.type) {
    case types.AUTHORS_REQUEST:
    case types.AUTHOR_REQUEST:
      break;
    case types.AUTHORS_ERROR:
    case types.AUTHOR_ERROR:
      console.error(action.message);
      return state.set('message', action.message);
    case types.AUTHORS_SUCCESS:
      return state.set('authors', fromJS(action.authors)).delete('message');
    case types.AUTHOR_SUCCESS:
      let authors = state.get('authors');
      let index = authors.findIndex(author => author.get('id') == action.author.id);
      if (index >= 0) {
        return state.setIn(['authors', index], fromJS(action.author)).delete('message');
      } else {
        let newAuthors = authors.push(fromJS(action.author));
        return state.set('authors', newAuthors).delete('message');
      }
  }

  return state;
}
