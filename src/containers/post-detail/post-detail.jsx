import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Post, CommentList } from './../../components';
import './post-detail.css';
import { receivePost, receiveUser } from './../../actions';

const PostDetail = ({className, postId, post, author, loadPost, loadUser}) => {
  useEffect(() => {
    if (postId && !post) {
      loadPost(postId);
    }

    if (post && !author) {
      loadUser(post.userId);
    }
  });

  if (postId) {
    return (
      (<div className={`post-detail ${className}`}>
        <Post post={post} author={author} />
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
  const post = state.posts[postId] ? state.posts[postId] : undefined;
  const userId = post ? post.userId : undefined;
  const author = state.users[userId] ? state.users[userId] : undefined;

  return {
    post,
    author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPost: (postId) => dispatch(receivePost(postId)),
    loadUser: (userId) => dispatch(receiveUser(userId))
  }
}

export const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)