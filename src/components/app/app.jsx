import React from 'react';
import { PostListContainer, PostDetailContainer } from './../../containers';
import './app.css';

export const App = ({match}) => {
  const selectedPostId = match.params.postId;

  return (
    <div className="app">
      <div className="app__title">
        Posts app
      </div>
      <PostListContainer className="app__post-list" />
      <PostDetailContainer className="app__post-detail" postId={selectedPostId || ''} />
    </div>
  );
}