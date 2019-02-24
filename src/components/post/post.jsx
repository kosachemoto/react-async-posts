import React from 'react';
import { Author } from './../../components';
import './post.css';

export const Post = ({title, body}) => {
  return (
    <div className="post">
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>
      <Author className="post_author" />
    </div>
  );
}