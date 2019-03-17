import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { App } from './../../components';
import './root.css';

export const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <>
          <Route exact path="/" render={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" render={(props) => <App {...props} />} />
          <Route exact path="/posts/:postId" render={(props) => <App {...props} />} />
        </>
      </BrowserRouter>
    </Provider>
  )
}