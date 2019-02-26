import React from 'react';
import './reset-button.css';

export const ResetButton = ({resetPosts}) => {
  return (
    <div className="reset-button" onClick={resetPosts}>
      <div className="reset-button__title">Reset Local Storage</div>
    </div>
  )
}