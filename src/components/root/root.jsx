import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { App } from './../../components';
import './root.css';

export const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={App} />
      </BrowserRouter>
    </Provider>
  )
}