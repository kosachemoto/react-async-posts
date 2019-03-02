import React from 'react';
import './error-message.css';

export const ErrorMessage = ({className, message}) => {
  return (
    <div className={`error-message ${className}`}>
      {message}
    </div>
  );
}