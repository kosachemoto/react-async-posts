import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Post, CommentList } from './../../components';
import * as services from '../../services';
import './post-detail.css';
import { receivePost } from './../../actions';

const PostDetail = ({className, postId, post, loadPost}) => {
  useEffect(() => {
    if (postId && !post) {
      loadPost(postId);
    }
  });

  if (postId) {
    return (
      (<div className={`post-detail ${className}`}>
        <Post {...post} />
        <CommentList />
      </div>)
    );
  } else {
    return (
      <div className={`post-detail ${className}`}>
        Did not selected any post...
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;

  return {
    post: state.posts[postId] ? state.posts[postId] : undefined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPost: (postId) => dispatch(receivePost(postId))
  }
}

export const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)