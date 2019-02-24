import React, { useEffect } from 'react';
import { PostList, PostDetail } from './../../components';
import { testContainer } from './../../containers';
import './app.css';

export const App = ({match}) => {
  useEffect(() => {
    console.log("testContainer:", testContainer);
  });

  const selectedPostId = match.params.postId;

  return (
    <div className="app">
      <div className="app__title">
        Posts app
      </div>
      <PostList className="app__post-list" />
      <PostDetail className="app__post-detail" postId={selectedPostId || ''} />
    </div>
  );
}