import React from 'react';
import './reset-button.css';
import stop from './../../assets/svg/stop.svg';

export const ResetButton = ({resetPosts}) => {
  return (
    <div className="reset-button" onClick={resetPosts}>
      <div className="reset-button__title">Reset Store</div>
      <img className="reset-button__img" src={stop} alt="Reset store"/>
    </div>
  )
}