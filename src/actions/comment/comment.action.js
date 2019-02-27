// export const REQUEST_COMMENT = {
//   START: "REQUEST_COMMENT_START",
//   FINISH: "REQUEST_COMMENT_FINISH",
//   ERROR: "REQUEST_COMMENT_ERROR"
// }

// function requestComments(stage, payload) {
//   return {
//     type: `${REQUEST_COMMENT}_${stage}`,
//     payload
//   }
// }

// export function receiveComment(postId) {
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