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
    try {
      // servicces.Post.author(userId)
      //   .then(author => {
      //     console.log("(action):author:", author);
          dispatch(requestUser('FINISH'));
        // })
    } catch (error) {
      dispatch(requestUser('ERROR'));
    }
  }
}

