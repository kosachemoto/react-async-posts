import React from 'react';
import { connect } from 'react-redux';
import { resetState, receivePost, receiveAuthor } from './../../actions';
import { PostPreview, MoreButton, ResetButton } from './../../components';
import './post-list.css';

const PostList = ({posts, loadNext, className, resetPosts}) => {
  const nextId = nextPostId(posts);
  
  return (
    <div className={`post-list ${className}`}>
      { Object.values(posts).map(((post, index) => <PostPreview key={index} {...post} />)) }
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
    loadNext: postId => dispatch(receivePost(postId)),
    loadAuthor: () => dispatch(receiveAuthor()),
    resetPosts: () => dispatch(resetState('POSTS'))
  }
}

export const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);