import React, {useEffect} from 'react';
import './author.css';

export const Author = ({className, author}) => {

  return (
    <div className={`author ${className}`}>
      <span className="author-name">{author.name}</span> / <span className="author-email">{author.email}</span>
    </div>
  );
}