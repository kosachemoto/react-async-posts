import fetch from 'isomorphic-fetch';
import * as services from './services';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const REQUEST_POSTS = {
  START: "REQUEST_POSTS_START",
  FINISH: "REQUEST_POSTS_FINISH",
  ERROR: "REQUEST_POSTS_ERROR"
}

export function requestPosts(state, payload) {
  return {
    type: REQUEST_POSTS[state],
    payload
  }
}

function requestComments(stage, payload) {
  return {
    type: `${REQUEST_COMMENTS}_${stage}`,
    payload
  }
}

export function receivePosts() {
  return function (dispatch) {
    dispatch(requestPosts('START'));
    try {
      services.Post.load(1)
        .then(posts => {
          dispatch(requestPosts('FINISH', { posts }))
        })
    } catch (error) {
      services.Post.loaded = false;
      dispatch(requestPosts('ERROR', { error }))
    }
  }
}

// export function receiveComments(postId) {
//   return function (dispatch) {
//     dispatch(requestComments('START', { postId }));
//     try {
//       let response = axios.get('url');
//       let comments = response.data;
//       dispatch(requestComments('FINISH', { postId, comments }))
//     } catch (error) {
//       dispatch(requestComments('ERROR', { postId, error }))
//     }

//   }
// }