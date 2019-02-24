import React from 'react';
import { PostPreview, MoreButton } from './../../components';
import { connect } from 'react-redux';
import { receivePosts } from './../../actions';
import './post-list.css';

const component = ({posts, loadMore, className}) => {
  return (
    <div className={`post-list ${className}`}>
      <MoreButton loadMore={loadMore} />
      { Object.values(posts).map(((post, index) => <PostPreview key={index} {...post} />)) }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMore: () => dispatch(receivePosts())
  }
}

export const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);