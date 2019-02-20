import React from 'react';
import './author.css';

export const Author = ({className}) => {
  return (
    <div className={`author ${className}`}>
      <span className="author-name">Bret</span> / <span className="author-email">Sincere@april.biz</span>
    </div>
  );
}