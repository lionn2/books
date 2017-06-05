import { combineReducers } from 'redux';

// Reducers
import BooksReducer from './BooksReducer';
import AuthorsReducer from './AuthorsReducer';
import GenreReducer from './GenreReducer';

// Combine Reducers
export const reducers = combineReducers({
	booksState: BooksReducer,
	authorsState: AuthorsReducer,
	genreState: GenreReducer,
});
