import React from 'react';
import { Post, CommentList } from './../../components';
import './post-detail.css';

export const PostDetail = ({className}) => {
  return (
    <div className={`post-detail ${className}`}>
      <Post />
      <CommentList />
    </div>
  );
}