import React from 'react';
import { Author } from './../../components';
import './post.css';

export const Post = () => {
  return (
    <div className="post">
      <h3 className="post-title">SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT</h3>
      <p className="post-body">quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
      <Author className="post_author" />
    </div>
  );
}