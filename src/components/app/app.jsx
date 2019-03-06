import React from 'react';
import { MasterPanel } from '../../components';
import { PostDetailContainer } from '../../containers';
import './app.css';

export const App = ({match}) => {
  const selectedPostId = match.params.postId;

  return (
    <div className="app">
      <div className="app__title">
        Posts app
      </div>
      <MasterPanel />
      <PostDetailContainer className="app__post-detail" postId={selectedPostId || ''} />
    </div>
  );
}