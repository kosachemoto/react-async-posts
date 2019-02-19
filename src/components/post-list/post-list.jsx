import React, { useEffect } from 'react';
import { Post, MoreButton } from './../../components';
import { connect } from 'react-redux';
import { receivePosts } from './../../actions';
import './post-list.css';

const component = ({posts, loadMore, className}) => {
  return (
    <div className={`${className} post-list`}>
      { Object.values(posts).map(((post, index) => <Post key={index} {...post} />)) }
      <MoreButton loadMore={loadMore} />
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