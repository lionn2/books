import { combineReducers } from 'redux';

// Reducers
import BooksReducer from './BooksReducer';

// Combine Reducers
export const reducers = combineReducers({
	booksState: BooksReducer,
});
