import React from 'react';
import { Post, MoreButton } from './../../components';
import { connect } from 'react-redux';
import { receivePosts } from './../../actions';
import './post-list.css';

const component = ({posts, loadMore}) => {
  return (
    <div className="post-list">
      { Object.values(posts).map(((post, index) => <Post key={index} {...post} />)) }
      <MoreButton loadMore={loadMore} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
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