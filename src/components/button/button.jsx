import React from 'react';
import './button.css';


const imagePath = '../../assets/svg';

export const Button = ({image, callback, className = ""}) => {
  const getImage = (image) => {
    console.log("image log:", image);
    try {
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