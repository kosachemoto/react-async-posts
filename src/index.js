import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import root from './reducers';
import { createLogger } from 'redux-logger';
import { Root } from './components';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const persistedState = loadState();

const store = createStore(
  root,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
