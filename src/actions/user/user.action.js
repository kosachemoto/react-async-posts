import * as services from './../../services';

export const REQUEST_USER = {
  START: "REQUEST_USER_START",
  FINISH: "REQUEST_USER_FINISH",
  ERROR: "REQUEST_USER_ERROR"
}

export function requestUser(state, payload) {
  return {
    type: REQUEST_USER[state],
    payload
  }
}

export function receiveUser(userId) {
  return function(dispatch) {
    dispatch(requestUser('START'));
    services.Post.user(userId)
      .then(user => {
        dispatch(requestUser('FINISH', { user }));
      })
      .catch(error => {
        dispatch(requestUser('ERROR', { error }));
      });
  }
}
