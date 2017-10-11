import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
