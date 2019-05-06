import React from 'react';
import './button.css';

export const Button = ({image, callback, className = ""}) => {
  const getImage = (image) => {
    try {
      const imagePath = '../../assets/svg';
      const myPath = './' + imagePath + '/' + image + '.svg';
      // const value = require('../../assets/svg');
      // console.log('value:', value);
      
      return require(`../../assets/svg/${image}.svg`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`button ${className}`} onClick={callback}>
      <img className="button__img" src={getImage(image)} alt="Add more"/>
    </div>
  )
}