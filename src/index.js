import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import postsApp from './reducers';
import { receivePosts } from './actions';
import { createLogger } from 'redux-logger';
import * as something from './components';
import Root from './components/root/root';
import * as someApp from './components/app';
import * as somePost from './components/post';

console.log("something:", something);
console.log("app:", someApp);
console.log("post:", somePost);

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let loggerMiddleware = createLogger();

let store = createStore(
  postsApp,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

store.dispatch(receivePosts());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
