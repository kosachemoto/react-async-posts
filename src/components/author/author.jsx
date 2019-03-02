import React, {useEffect} from 'react';
import { ErrorMessage } from '../../components';
import './author.css';

export const Author = ({className, author = {}}) => {
  if (Object.entries(author).length) {
    return (
      <div className={`author ${className}`}>
        <span className="author-name">{author.name}</span> / <span className="author-email">{author.email}</span>
      </div>
    );
  } else {
    return (
      <ErrorMessage message="Author does not loaded for unknown reasons... w(°ｏ°)w" />
    )
  }

}