import fetch from 'isomorphic-fetch';
import * as services from './services';

export const RESET_STATE = {
  POSTS: "RESET_STATE_POSTS"
}

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const REQUEST_POST = {
  START: "REQUEST_POST_START",
  FINISH: "REQUEST_POST_FINISH",
  ERROR: "REQUEST_POST_ERROR"
}

export const REQUEST_AUTHOR = {
  START: "REQUEST_AUTHOR_START",
  FINISH: "REQUEST_AUTHOR_FINISH",
  ERROR: "REQUEST_AUTHOR_ERROR"
}

export function resetState(state) {
  return {
    type: RESET_STATE[state]
  }
}

export function requestPost(state, payload) {
  return {
    type: REQUEST_POST[state],
    payload
  }
}

export function requestAuthor(state, payload) {
  return {
    type: REQUEST_AUTHOR[state],
    payload
  }
}

function requestComments(stage, payload) {
  return {
    type: `${REQUEST_COMMENTS}_${stage}`,
    payload
  }
}

export function receivePost(postId) {
  return function (dispatch) {
    dispatch(requestPost('START'));
    try {
      services.Post.post(postId)
        .then(post => {
          console.log("post:", post);
          dispatch(requestPost('FINISH', { post }))
        })
    } catch (error) {
      services.Post.loaded = false;
      dispatch(requestPost('ERROR', { error }))
    }
  }
}

export function receiveAuthor(userId) {
  return function(dispatch) {
    dispatch(requestAuthor('START'));
    try {
      // servicces.Post.author(userId)
      //   .then(author => {
      //     console.log("(action):author:", author);
          dispatch(requestAuthor('FINISH'));
        // })
    } catch (error) {
      dispatch(requestAuthor('ERROR'));
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