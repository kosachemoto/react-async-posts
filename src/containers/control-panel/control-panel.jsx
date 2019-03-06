import React from 'react';
import { connect } from 'react-redux';
import { receivePost, resetState } from '../../actions';
import { Button, MoreButton, ResetButton } from '../../components';
import './control-panel.css';


const ControlPanel = ({posts, loadPost, resetPosts}) => {
  const nextId = nextPostId(posts);

  const metadata = [
    {
      className: 'more-button',
      image: 'plus',
      callback: () => {loadPost(nextId)}
    },
    {
      className: 'reset-button',
      image: 'stop',
      callback: resetPosts
    }
  ];

  return (
    <div className="control-panel">
      { metadata.map(button => <Button {...button} />) }
    </div>
  )
}

export const nextPostId = (posts) => {
  const ids = Object.keys(posts);

  if (!ids.length) {
    return 1;
  }

  const missedIndex = ids.findIndex((id, index) => +id !== index + 1); 

  if (missedIndex < 0) {
    return ids.length + 1;
  } else {
    return missedIndex + 1;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: postId => dispatch(receivePost(postId)),
    resetPosts: () => dispatch(resetState('POSTS'))
  }
}

export const ControlPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)