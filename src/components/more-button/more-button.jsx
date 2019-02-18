import React from 'react';
import './more-button.css';

export const MoreButton = ({loadMore}) => {
  return (
    <div className="more-button" onClick={loadMore}>
      Load More
    </div>
  )
}