import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import app from './modules/app';
import { init, pushStateToHistory } from './modules/query';
import App from './containers/App';
import './styles/index.scss';

const store = createStore(app);

export default function TriangleCalculator() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

store.dispatch(init(window.location));

store.subscribe(() => {
  pushStateToHistory(window)(store.getState());
});
