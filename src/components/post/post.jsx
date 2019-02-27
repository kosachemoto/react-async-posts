import React from 'react';
import { Author } from './../../components';
import './post.css';

export const Post = ({post = {}, author = {}}) => {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
      <Author className="post_author" author={author} />
    </div>
  );
}