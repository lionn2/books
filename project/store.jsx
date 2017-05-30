import { createStore } from 'redux';
import { reducers } from './reducers';

function getMiddlewares() {
  if (isDebug)
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(reducers, getMiddlewares());
