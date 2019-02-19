import React from 'react';
import { PostList, PostDetail } from './../../components';
import styles from './app.css';

export const App = () => {
  return (
    <div className="app">
      <div className="app__title">
        Posts app
      </div>
      <PostList className="app__post-list" />
      <PostDetail className="app__post-detail" />
    </div>
  );
}