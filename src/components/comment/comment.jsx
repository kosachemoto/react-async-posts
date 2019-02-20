import React from 'react'; 
import { Author } from './../../components';
import './comment.css'; 

export const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-title">REPELLAT PROVIDENT OCCAECATI</div>
      <div className="comment-body">quas totam nostrum rerum est autem sunt rem eveniet architecto</div>
      <Author className="comment_author" />
    </div>
  );
}