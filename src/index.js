import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers';
import { App } from './components/App';

const store = createStore(
  combineReducers(rootReducer()),
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
