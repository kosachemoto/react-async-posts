import React, { useEffect } from 'react';
import './more-button.css';
import plus from './../../assets/svg/plus.svg';

export const MoreButton = ({loadNext}) => {
  return (
    <div className="more-button" onClick={loadNext}>
      <div className="more-button__title">Load More</div>
      <img className="more-button__img" src={plus} alt="Add more"/>
    </div>
  )
}