import React from 'react';
import { Post } from './../../components';
import './post-list.css';

export const PostList = () => {
  return (
    <div className="post-list">
      <Post />
      <Post />
      <Post />
    </div>
  )
}