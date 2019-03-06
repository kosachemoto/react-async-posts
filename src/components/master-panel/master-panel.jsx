import React from 'react';
import './master-panel.css';
import { ControlPanelContainer, PostListContainer } from '../../containers';

export const MasterPanel = () => {
  return (
    <div className="master-panel">
      <ControlPanelContainer />
      <PostListContainer />
    </div>
  )
}