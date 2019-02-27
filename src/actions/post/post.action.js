import * as services from './../../services';

export const REQUEST_POST = {
  START: "REQUEST_POST_START",
  FINISH: "REQUEST_POST_FINISH",
  ERROR: "REQUEST_POST_ERROR"
}

export function requestPost(state, payload) {
  return {
    type: REQUEST_POST[state],
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