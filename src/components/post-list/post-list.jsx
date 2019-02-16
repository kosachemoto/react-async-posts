import React from 'react';
import { Post, MoreButton } from './../../components';
import { connect } from 'react-redux';
import './post-list.css';

const component = ({posts}) => {
  return (
    <div className="post-list">
      { Object.values(posts).map(((post, index) => <Post key={index} {...post} />)) }
      <MoreButton />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export const PostList = connect(
  mapStateToProps,
  null
)(component);