import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles.less';
import Router from './router';

render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('root')
);
