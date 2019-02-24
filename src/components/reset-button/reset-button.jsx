import React from 'react';
import { resetState } from '../../localStorage';
import './reset-button.css';

export const ResetButton = () => {
  return (
    <div className="reset-button" onClick={resetState}>
      <div className="reset-button__title">Reset Local Storage</div>
    </div>
  )
}