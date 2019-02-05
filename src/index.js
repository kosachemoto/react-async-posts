import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { receivePosts, REQUEST_POSTS } from './actions';

let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  ));

let unsubscribe = store.subscribe(() => {
  console.log("store was changed:", store.getState());
});

store.dispatch(receivePosts());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
