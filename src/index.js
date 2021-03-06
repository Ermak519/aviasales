import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers';
import { App } from './components/App';

const store = configureStore({
  reducer: rootReducer(),
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
