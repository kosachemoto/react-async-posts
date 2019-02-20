import React from 'react';
import './post-preview.css'

export const PostPreview = ({title, body}) => {
  return (
    <div className="post-preview">
      <h3 className="post-preview-title">{title}</h3>
      <p className="post-preview-body">{body}</p>
    </div>
  );
}