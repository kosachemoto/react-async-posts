import React from 'react';
import { NavLink } from 'react-router-dom';
import './post-preview.css'

export const PostPreview = ({id, title, body}) => {
  return (
    <NavLink
      exact
      to={`/posts/${id}`}
      className="post-preview">
      <h3 className="post-preview-title">{title}</h3>
      <p className="post-preview-body">{body}</p>
    </NavLink>
  );
}