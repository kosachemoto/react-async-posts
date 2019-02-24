import React from 'react';
import { connect } from 'react-redux';
import { Post, CommentList } from './../../components';
import './post-detail.css';

const PostDetail = ({className, postId, post}) => {
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
    post: postId ? state.posts[postId] : {}
  }
}

export const PostDetailContainer = connect(
  mapStateToProps,
  null
)(PostDetail)